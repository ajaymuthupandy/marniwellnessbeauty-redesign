// Downloads every WordPress upload referenced in data/, app/ and components/
// into public/images/<yyyy>/<mm>/, downsizing large originals, then writes
// data/image-sizes.json (width/height per image) for layout-stable rendering.
//
//   node scripts/fetch-assets.mjs          download missing files
//   node scripts/fetch-assets.mjs --force  re-download everything
//   node scripts/fetch-assets.mjs --prune  also delete images no longer referenced

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SCAN_DIRS = ["data", "app", "components"];
const OUT_DIR = path.join(ROOT, "public", "images");
const SIZES_FILE = path.join(ROOT, "data", "image-sizes.json");
const SOURCE = "https://marniwellnessbeauty.com/wp-content/uploads/";
// The origin answers plain user agents with 406.
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36";
const MAX_WIDTH = 2000;
const CONCURRENCY = 6;
const force = process.argv.includes("--force");
const prune = process.argv.includes("--prune");

const PATH_RE = /(?:^|[\s"'`/(])((?:19|20)\d{2}\/\d{2}\/[\w.\-]+\.(?:jpe?g|png|webp))/gi;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : /\.(tsx?|mjs|css)$/.test(e.name) ? [full] : [];
    }),
  );
  return files.flat();
}

async function collect() {
  const found = new Set();
  for (const dir of SCAN_DIRS) {
    for (const file of await walk(path.join(ROOT, dir))) {
      const text = await fs.readFile(file, "utf8");
      for (const m of text.matchAll(PATH_RE)) found.add(m[1]);
    }
  }
  return [...found].sort();
}

async function exists(p) {
  return fs.access(p).then(() => true, () => false);
}

async function download(rel) {
  const dest = path.join(OUT_DIR, rel);
  if (!force && (await exists(dest))) return "skip";
  const res = await fetch(SOURCE + rel, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const input = Buffer.from(await res.arrayBuffer());
  const img = sharp(input, { failOn: "none" }).rotate();
  const meta = await img.metadata();
  if ((meta.width ?? 0) > MAX_WIDTH) img.resize({ width: MAX_WIDTH });
  const ext = path.extname(rel).toLowerCase();
  const output =
    ext === ".png"
      ? await img.png({ compressionLevel: 9, palette: false }).toBuffer()
      : ext === ".webp"
        ? await img.webp({ quality: 82 }).toBuffer()
        : await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  await fs.mkdir(path.dirname(dest), { recursive: true });
  // Keep the original bytes when re-encoding would not save anything.
  await fs.writeFile(dest, output.length < input.length ? output : input);
  return "ok";
}

async function pool(items, worker) {
  const results = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < items.length) {
        const item = items[i++];
        try {
          results.push([item, await worker(item)]);
        } catch (err) {
          results.push([item, `FAIL ${err.message}`]);
        }
      }
    }),
  );
  return results;
}

async function writeSizes(paths) {
  const sizes = {};
  for (const rel of paths) {
    const file = path.join(OUT_DIR, rel);
    if (!(await exists(file))) continue;
    const { width, height } = await sharp(file).metadata();
    sizes[`/images/${rel}`] = [width, height];
  }
  await fs.writeFile(SIZES_FILE, JSON.stringify(sizes, null, 0) + "\n");
  return Object.keys(sizes).length;
}

const paths = await collect();
console.log(`Found ${paths.length} image references`);
const results = await pool(paths, download);
const failed = results.filter(([, r]) => r.startsWith("FAIL"));
const fetched = results.filter(([, r]) => r === "ok").length;
console.log(`Downloaded ${fetched}, skipped ${results.length - fetched - failed.length}, failed ${failed.length}`);
for (const [rel, r] of failed) console.log(`  ${r}  ${rel}`);
console.log(`Wrote sizes for ${await writeSizes(paths)} images to data/image-sizes.json`);

if (prune) {
  const keep = new Set(paths.map((p) => path.join(OUT_DIR, p)));
  const unused = (await walkImages(OUT_DIR)).filter((f) => !keep.has(f));
  await Promise.all(unused.map((f) => fs.unlink(f)));
  console.log(`Pruned ${unused.length} unreferenced images`);
}

async function walkImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walkImages(full) : /\.(jpe?g|png|webp)$/i.test(e.name) ? [full] : [];
    }),
  );
  return files.flat();
}
