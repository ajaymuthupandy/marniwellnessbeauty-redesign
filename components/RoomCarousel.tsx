"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowIcon } from "./icons";

/** Scroll-snap image carousel with arrow controls and a counter. */
export function RoomCarousel({ images, name }: { images: string[]; name: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const next = (index + dir + images.length) % images.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative h-full min-h-72 overflow-hidden bg-night">
      <div
        ref={track}
        onScroll={onScroll}
        className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto"
        aria-label={`${name} photos`}
        tabIndex={0}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full min-h-72 w-full shrink-0 snap-start">
            <Image
              src={src}
              alt={`${name}, photo ${i + 1} of ${images.length}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/60 to-transparent p-4">
        <span className="label text-white/90">
          {index + 1} / {images.length}
        </span>
        <div className="pointer-events-auto flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="grid size-11 place-items-center border border-white/60 text-white transition-colors hover:border-gold-light hover:bg-gold-light"
          >
            <ArrowIcon className="rotate-180 text-lg" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="grid size-11 place-items-center border border-white/60 text-white transition-colors hover:border-gold-light hover:bg-gold-light"
          >
            <ArrowIcon className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
