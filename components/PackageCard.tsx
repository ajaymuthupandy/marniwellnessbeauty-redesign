import Image from "next/image";
import Link from "next/link";
import { cardTitle, sharesTitle, type Package } from "@/data/packages";
import { ArrowIcon } from "./icons";

export function PackageCard({
  pkg,
  // The cards are taller than wide, so a landscape cover needs about 1.5× the card width.
  sizes = "(min-width: 1024px) 46vw, 100vw",
  className = "",
}: {
  pkg: Package;
  sizes?: string;
  className?: string;
}) {
  // Where the title already names the guests, the meta line shows only the duration.
  const guests = sharesTitle(pkg) ? null : pkg.guests;
  return (
    <Link
      href={`/${pkg.slug}/`}
      className={`group relative isolate block min-h-[22rem] overflow-hidden bg-night sm:min-h-0 ${className}`}
    >
      {/* Decorative: the card's text already names the package. */}
      <Image
        src={pkg.cover}
        alt=""
        fill
        sizes={sizes}
        className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/25 to-black/5" />
      <div className="flex h-full flex-col justify-end p-5 text-white sm:p-6">
        <h3 className="card-title text-[1.125rem] text-white">{cardTitle(pkg)}</h3>
        <p className="label mt-2 text-white/80">
          {pkg.duration}
          {guests && ` · ${guests}`}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-3">
          <p className="text-sm font-semibold tracking-wide text-gold-light">
            {pkg.price}
            {pkg.priceNote && <span className="ml-1.5 font-normal text-white/70">{pkg.priceNote}</span>}
          </p>
          <ArrowIcon className="text-xl text-white transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
