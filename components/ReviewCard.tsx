import Image from "next/image";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review, className = "" }: { review: Review; className?: string }) {
  return (
    <figure className={`flex flex-col bg-white p-6 ${className}`}>
      {/* Centred in the free height when the card is stretched, with the name kept at the bottom. */}
      {/* One quote size for every card; the first card stands out by its width alone. */}
      <blockquote className="flex flex-1 items-center text-[1rem] leading-relaxed">
        <p>{review.text}</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        {review.avatar ? (
          <Image src={review.avatar} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-light text-sm font-semibold text-white"
          >
            {review.name.charAt(0)}
          </span>
        )}
        <span className="card-title text-[0.9375rem] text-gold-ink">{review.name}</span>
        {/* The closing quote mark sits in the name row, so it adds no height. */}
        <span aria-hidden="true" className="ml-auto h-6 text-5xl leading-[0.9] text-gold-light/60">
          ”
        </span>
      </figcaption>
    </figure>
  );
}
