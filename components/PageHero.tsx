import Image from "next/image";
import type { ReactNode } from "react";

type Variant = "overlay" | "center" | "split" | "split-reverse" | "banner" | "plain";

type Props = {
  title: ReactNode;
  text?: ReactNode;
  image?: string;
  position?: string;
  variant?: Variant;
  /** Extra content under the intro on the plain and banner variants (chips, facts). */
  aside?: ReactNode;
  children?: ReactNode;
};

const h1 = "title-caps text-[clamp(1.75rem,3.8vw,3rem)]";

/** Inner-page header. Each page picks a variant so pages don't all open the same way. */
export function PageHero({ title, text, image, position = "center", variant = "overlay", aside, children }: Props) {
  // Buttons stack full width on phones, so their edges line up when they wrap.
  const actions = children && <div className="mt-6 flex flex-wrap items-center gap-3 max-sm:*:w-full">{children}</div>;

  const photo = (sizes: string, className = "") =>
    image && (
      <Image
        src={image}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes={sizes}
        className={`object-cover ${className}`}
        style={{ objectPosition: position }}
      />
    );

  // Plain: no photo, title left and intro right on the light grey band.
  if (variant === "plain") {
    return (
      <section className="border-b border-line bg-mist">
        <div className="container-x grid gap-4 py-9 lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-12">
          <h1 className={`${h1} lg:col-span-5`}>{title}</h1>
          <div className="lg:col-span-7">
            {text && <p className="lead text-ink-soft">{text}</p>}
            {aside && <div className="mt-4">{aside}</div>}
            {actions}
          </div>
        </div>
      </section>
    );
  }

  // Split: text and a framed photo side by side inside the page width.
  if (variant === "split" || variant === "split-reverse") {
    const reverse = variant === "split-reverse";
    return (
      <section className="pt-6 lg:pt-8">
        <div className="container-x grid gap-5 lg:grid-cols-12 lg:gap-10">
          <div className={`flex flex-col justify-center py-2 lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
            <h1 className={h1}>{title}</h1>
            {text && <p className="lead mt-4 text-ink-soft">{text}</p>}
            {actions}
          </div>
          <div className="relative min-h-64 overflow-hidden sm:min-h-80 lg:col-span-7 lg:min-h-[26rem]">
            {photo("(min-width: 1024px) 58vw, 100vw")}
          </div>
        </div>
      </section>
    );
  }

  // Banner: a clean photo strip, then the title row directly beneath it (nothing overlaps).
  if (variant === "banner") {
    return (
      <section>
        <div className="relative h-[clamp(13rem,28vw,22rem)] bg-night-deep">{photo("100vw")}</div>
        <div className="container-x">
          <div className="grid gap-x-10 gap-y-5 border-b border-line py-6 lg:grid-cols-12 lg:items-center lg:py-7">
            <div className="lg:col-span-7">
              <h1 className={h1}>{title}</h1>
              {text && <p className="lead mt-3 text-ink-soft">{text}</p>}
              {aside && <div className="mt-3">{aside}</div>}
            </div>
            {children && <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:text-right">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  // Overlay (text bottom-left) and Center (text centred) share the full-bleed photo.
  const center = variant === "center";
  return (
    <section
      className={`relative isolate flex min-h-[clamp(15rem,30vw,23rem)] overflow-hidden bg-night-deep ${
        center ? "items-center text-center" : "items-end"
      }`}
    >
      {photo("100vw", "-z-10")}
      {center ? (
        <div className="absolute inset-0 -z-10 bg-black/55" />
      ) : (
        <>
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/35 to-black/10" />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/55 via-black/20 to-transparent" />
        </>
      )}
      <div className={`container-x py-8 lg:py-12 ${center ? "flex flex-col items-center" : ""}`}>
        <h1 className={`${h1} max-w-4xl text-gold-light`}>{title}</h1>
        {text && <p className={`lead mt-3 max-w-2xl text-white/90 ${center ? "mx-auto" : ""}`}>{text}</p>}
        {children && (
          <div className={`mt-6 flex flex-wrap items-center gap-3 max-sm:*:w-full ${center ? "justify-center" : ""}`}>{children}</div>
        )}
      </div>
    </section>
  );
}
