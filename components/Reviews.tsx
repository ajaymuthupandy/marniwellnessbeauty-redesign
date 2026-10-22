"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Review } from "@/data/reviews";
import { ArrowIcon } from "./icons";
import { ReviewCard } from "./ReviewCard";
import { SmartLink, Title } from "./ui";

// Things the reviews praise, each linked to its page.
const mentions = [
  { label: "Ayurvedic treatments", href: "/wellness-in-bali/#ayurveda" },
  { label: "Balinese massage", href: "/wellness-in-bali/#massage" },
  { label: "Flower bath", href: "/wellness-in-bali/" },
  { label: "Jungle villas", href: "/marni-villa-ubud/" },
  { label: "Retreat packages", href: "/package/" },
];

const arrowClass =
  "grid size-11 place-items-center border border-gold text-lg text-gold-ink transition-colors hover:border-gold-light hover:bg-gold-light hover:text-ink disabled:pointer-events-none disabled:opacity-30";

// Card widths follow the 12-column grid: the row spans nine columns, a card three, the featured card six.
const basis = "basis-[85%] sm:basis-[calc(50%_-_0.5rem)] md:basis-[calc(50%_-_0.625rem)]";
const cardClass = `${basis} lg:basis-[calc((100%_-_2.5rem)/3)]`;
const featuredClass = `${basis} lg:basis-[calc((100%_-_2.5rem)/3*2_+_1.25rem)]`;

/** Home: guest reviews as a swipeable row beside the title, closing the page above the footer. */
export function Reviews({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdge({ start: el.scrollLeft <= 1, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // One regular card (plus the gap) per click.
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.children[1] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + parseFloat(getComputedStyle(el).columnGap)), behavior: "smooth" });
  };

  return (
    <section className="section section-end bg-mist">
      <div className="section-end-grow container-x grid gap-x-4 gap-y-6 md:gap-x-5 lg:grid-cols-12">
        <div className="flex flex-wrap items-end justify-between gap-4 lg:col-span-3 lg:flex-col lg:flex-nowrap lg:items-stretch lg:justify-center lg:gap-6">
          <div className="max-w-md">
            <Title>Guest Reviews</Title>
            <p className="mt-3 text-ink-soft">Kind words from guests who stayed, relaxed and were pampered with us.</p>
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous reviews" onClick={() => step(-1)} disabled={edge.start} className={arrowClass}>
              <ArrowIcon className="rotate-180" />
            </button>
            <button type="button" aria-label="Next reviews" onClick={() => step(1)} disabled={edge.end} className={arrowClass}>
              <ArrowIcon />
            </button>
          </div>
          {/* A guest moment that takes only the column's spare height; short screens skip it. */}
          <div className="relative hidden min-h-0 flex-1 lg:[@media(min-height:46rem)]:block">
            <Image
              src="/images/2023/07/mahottamavillaubud_266.jpg"
              alt="A guest enjoying a flower bath at Marni Alas Spa"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-5 lg:col-span-9">
          <ul
            ref={track}
            aria-label="Guest reviews"
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:mx-0 sm:scroll-px-0 sm:px-0 md:gap-5 lg:flex-1"
          >
            {reviews.map((r, i) => (
              <li key={r.name} className={`flex shrink-0 snap-start ${i === 0 ? featuredClass : cardClass}`}>
                <ReviewCard review={r} className="w-full" />
              </li>
            ))}
          </ul>
          {/* What the reviews talk about, linked to where to find it. Wide, tall screens only. */}
          <div className="hidden flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-4 xl:[@media(min-height:46rem)]:flex">
            <p className="label text-mute">Guests mention</p>
            <ul className="flex flex-wrap gap-2">
              {mentions.map((m) => (
                <li key={m.label}>
                  <SmartLink href={m.href} className="chip transition-colors hover:border-gold hover:text-gold-ink">
                    {m.label}
                    <ArrowIcon className="text-gold" />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
