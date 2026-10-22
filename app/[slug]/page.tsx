import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PackageStrip } from "@/components/Closers";
import { ArrowIcon, CheckIcon, MailIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { getPackage, packages } from "@/data/packages";
import { locations } from "@/data/site";

// Package pages live at the site root to keep the original WordPress URLs.
export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const pkg = getPackage((await params).slug);
  // Unknown slugs render the 404 page, so give it the 404 title.
  if (!pkg) return { title: "Page not found", robots: { index: false } };
  const name = `${pkg.title} ${pkg.duration}${pkg.guests ? ` (${pkg.guests})` : ""}`;
  return {
    title: name,
    description: `${pkg.tagline ?? ""} ${pkg.price}${pkg.priceNote ? ` ${pkg.priceNote}` : ""}.`.trim(),
    alternates: { canonical: `/${pkg.slug}/` },
    openGraph: { images: [pkg.images[0]] },
  };
}

// Every package page is fully prerendered from generateStaticParams.
export const ensureStatic = "navigation";

export default function PackagePage({ params }: PageProps<"/[slug]">) {
  return (
    <Suspense>
      <PackageView params={params} />
    </Suspense>
  );
}

async function PackageView({ params }: { params: PageProps<"/[slug]">["params"] }) {
  const pkg = getPackage((await params).slug);
  if (!pkg) notFound();

  const more = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-2 gap-1 bg-white">
        {pkg.images.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
            <Image
              src={src}
              alt={`${pkg.title}, photo ${i + 1}`}
              fill
              loading="eager"
              sizes="50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Link href="/package/" className="link-arrow mb-5 text-mute hover:text-gold-ink">
              <ArrowIcon className="rotate-180 text-base" /> All packages
            </Link>
            <h1 className="title-caps text-[clamp(1.875rem,3.4vw,2.75rem)]">{pkg.title}</h1>
            <p className="label mt-3 text-ink-soft">
              {pkg.duration}
              {pkg.guests && ` · ${pkg.guests}`}
            </p>
            {pkg.tagline && <p className="lead mt-4 text-ink">{pkg.tagline}</p>}
            <ul className="mt-6 grid gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-soft">
                  <CheckIcon className="mt-0.5 shrink-0 text-lg text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex flex-col gap-5 border-2 border-gold-light p-6 sm:p-8 lg:sticky lg:top-[calc(var(--header-h-compact)+1.5rem)]">
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-[2.25rem] font-semibold leading-none tracking-wide text-gold-ink">{pkg.price}</span>
                {pkg.priceNote && <span className="label text-mute">{pkg.priceNote}</span>}
              </p>
              <p className="text-ink-soft">
                {pkg.duration}
                {pkg.guests && `, ${pkg.guests.toLowerCase()}`}, at Marni Alas Retreat in Kenderan, Ubud.
              </p>
              <Button href={pkg.book} variant="solid" whatsapp className="w-full">
                Book now
              </Button>
              <a
                href={`mailto:${locations.bali.email}?subject=${encodeURIComponent(pkg.title)}`}
                className="flex items-center justify-center gap-2 text-[0.9375rem] text-ink-soft transition-colors hover:text-gold-ink"
              >
                <MailIcon className="text-gold" /> {locations.bali.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <PackageStrip
        title="More Packages"
        text="Other ways to stay with us, each with treatments and transfers included."
        picks={more}
      />
    </>
  );
}
