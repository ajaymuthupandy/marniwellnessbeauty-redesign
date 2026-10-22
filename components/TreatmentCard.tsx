import Image from "next/image";
import type { ReactNode } from "react";
import type { Treatment } from "@/data/treatments";
import { whatsapp } from "@/data/site";
import { Button } from "./ui";

export function TreatmentCard({ item }: { item: Treatment }) {
  return (
    // Compact row on phones (thumbnail left), photo card from tablet up.
    <article className="group grid grid-cols-[6.5rem_1fr] border border-line bg-white transition-colors duration-300 hover:border-gold-light sm:grid-cols-[9rem_1fr] md:flex md:flex-col">
      {/* Square on the compact phone row (a full-height strip cropped photos to slivers), 4:3 from tablet up. */}
      <div className="relative aspect-square self-start overflow-hidden md:aspect-[4/3] md:self-auto">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 9rem"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="card-title">{item.name}</h3>
        <div className="mt-1.5 text-sm">
          {item.prices.map((p) => (
            <p key={p} className="font-semibold tracking-wide text-ink">
              {p}
            </p>
          ))}
          {item.duration && <p className="mt-0.5 text-mute">{item.duration}</p>}
        </div>
        {item.summary && <p className="mt-2 text-[0.9375rem] leading-snug text-ink-soft md:mt-3">{item.summary}</p>}
        <div className="mt-auto pt-4 md:pt-5">
          <Button href={item.book} size="sm" whatsapp>
            Book now
          </Button>
        </div>
      </div>
    </article>
  );
}

/**
 * Picks column counts so a grid of n cards never leaves a hole in its last row:
 * 4 columns for multiples of 4, 3 for multiples of 3, otherwise 4 columns plus
 * one closing tile (see FillTile) when a single cell is missing.
 */
export function gridFor(n: number) {
  const fill = n % 4 === 3 && n % 3 !== 0;
  const slots = fill ? n + 1 : n;
  const lg = slots % 4 === 0 ? "lg:grid-cols-4" : n % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const md = slots % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3";
  return { fill, className: `${md} ${lg}` };
}

/** Closes an uneven grid with a useful call to action instead of an empty cell. */
export function FillTile({
  title,
  text,
  href = whatsapp.ch.href,
  action = "Ask on WhatsApp",
}: {
  title: ReactNode;
  text: ReactNode;
  href?: string;
  action?: string;
}) {
  return (
    <div className="flex min-h-64 flex-col items-start justify-center gap-4 border-2 border-gold-light bg-mist p-6">
      <h3 className="card-title text-[1.25rem]">{title}</h3>
      <p className="text-[0.9375rem] leading-snug text-ink-soft">{text}</p>
      <Button href={href} variant="solid" size="sm" whatsapp>
        {action}
      </Button>
    </div>
  );
}
