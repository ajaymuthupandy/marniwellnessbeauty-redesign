"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import type { GalleryAlbum } from "@/data/gallery";
import sizes from "@/data/image-sizes.json";

const dims: Record<string, number[]> = sizes;

type Tile = "large" | "large-right" | "wide" | "small";

/**
 * Lays n photos out on a 4-column grid that always ends on a straight line:
 * blocks of one large tile (2×2) plus four small ones fill two full rows, and
 * any remainder closes with wide (2×1) and small tiles that complete the row.
 * On two columns the same sequence also fills every row.
 */
function layout(n: number): Tile[] {
  // Wide tiles needed so r leftover photos fill whole 4-cell rows (null = impossible).
  const widesFor = (r: number) => {
    for (let w = 0; w <= r; w++) if ((r + w) % 4 === 0) return w;
    return null;
  };
  for (let blocks = Math.floor(n / 5); blocks >= 0; blocks--) {
    const rest = n - blocks * 5;
    const wides = widesFor(rest);
    if (wides === null) continue;
    const tiles: Tile[] = [];
    for (let b = 0; b < blocks; b++) tiles.push(b % 2 ? "large-right" : "large", "small", "small", "small", "small");
    for (let i = 0; i < rest; i++) tiles.push(i < wides ? "wide" : "small");
    return tiles;
  }
  return Array(n).fill("small");
}

const tileClass: Record<Tile, string> = {
  large: "col-span-2 row-span-2",
  "large-right": "col-span-2 row-span-2 md:col-start-3",
  wide: "col-span-2",
  small: "",
};

export function Gallery({ albums }: { albums: GalleryAlbum[] }) {
  const [albumId, setAlbumId] = useState(albums[0].id);
  const [open, setOpen] = useState(-1);
  const album = albums.find((a) => a.id === albumId) ?? albums[0];
  const tiles = layout(album.images.length);

  return (
    <>
      <div role="tablist" aria-label="Albums" className="no-scrollbar -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0 md:mb-5">
        {albums.map((a) => {
          const selected = a.id === albumId;
          return (
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`${a.label}, ${a.images.length} photos`}
              onClick={() => setAlbumId(a.id)}
              className={`label shrink-0 border px-4 py-3 transition-colors ${
                selected ? "border-gold-light bg-gold-light text-ink" : "border-line text-ink-soft hover:border-gold hover:text-gold-ink"
              }`}
            >
              {a.label}
              <span aria-hidden="true" className={`ml-2 font-normal ${selected ? "text-ink/75" : "text-mute"}`}>
                {a.images.length}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="grid grid-flow-row-dense auto-rows-[clamp(8.5rem,16vw,15rem)] grid-cols-2 gap-2 md:grid-cols-4"
      >
        {album.images.map(({ src, alt }, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden bg-mist ${tileClass[tiles[i]]}`}
            aria-label={`Open photo: ${alt}`}
          >
            {/* The button's label already describes the photo. */}
            <Image
              src={src}
              alt=""
              fill
              sizes={tiles[i] === "small" ? "(min-width: 768px) 25vw, 50vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open >= 0}
        index={open}
        close={() => setOpen(-1)}
        plugins={[Counter]}
        slides={album.images.map(({ src, alt }) => {
          const [width, height] = dims[src] ?? [1200, 800];
          return { src, width, height, alt };
        })}
        styles={{ container: { backgroundColor: "rgb(24 24 24 / 0.96)" } }}
      />
    </>
  );
}
