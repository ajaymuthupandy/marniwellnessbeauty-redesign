import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate, type Post } from "@/data/news";
import { packages, type Package } from "@/data/packages";
import { locations, whatsapp } from "@/data/site";
import { ArrowIcon, CheckIcon, ClockIcon, MailIcon, PinIcon, WhatsAppIcon } from "./icons";
import { PackageCard } from "./PackageCard";
import { Button, SectionHead, Title } from "./ui";

// Page-specific endings, so each page closes on something relevant to it
// instead of one repeated banner. Each is its page's last section: it fills
// the screen above the footer (.section-end) and keeps its column edges on
// the footer's 12-column grid, so the two line up.

/** Wellness and package pages: three packages beside a short intro. */
export function PackageStrip({ title, text, picks }: { title: ReactNode; text: ReactNode; picks: Package[] }) {
  return (
    <section className="section section-end bg-mist">
      <div className="section-end-grow container-x grid gap-x-4 gap-y-6 md:gap-x-5 lg:grid-cols-12">
        <div className="flex flex-col items-start justify-center lg:col-span-3">
          <Title>{title}</Title>
          <p className="mt-3 text-ink-soft">{text}</p>
          <Link href="/package/" className="link-arrow mt-5">
            All packages <ArrowIcon className="text-base" />
          </Link>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:gap-5 lg:col-span-9">
          {picks.map((p) => (
            <PackageCard
              key={p.slug}
              pkg={p}
              className="w-[78%] shrink-0 snap-start sm:aspect-[4/5] sm:w-auto lg:aspect-auto lg:min-h-56"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Packages: three steps from choosing to arriving, and what every stay includes. */
export function HowToBook() {
  const steps = [
    {
      title: "Choose a package",
      text: "Pick the stay that suits you, or ask for a custom plan.",
      image: "/images/2025/05/villa-in-ubud-marni-alas-villa-42.jpg",
      detail: (
        <>
          <ClockIcon className="shrink-0 text-gold" />
          {packages.length} packages, 4 to 6 days
        </>
      ),
    },
    {
      title: "Message us",
      text: "Send your dates on WhatsApp and we confirm availability.",
      image: "/images/2025/05/villa-in-ubud-marni-alas-villa-90.jpg",
      detail: (
        <a href={whatsapp.ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-gold-ink">
          <WhatsAppIcon className="shrink-0 text-gold" />
          {whatsapp.ch.label}
        </a>
      ),
    },
    {
      title: "We pick you up",
      text: "Transfer from the airport or Ubud, Canggu, Kuta and Denpasar.",
      image: "/images/2025/05/villa-in-ubud-marni-alas-villa-62.jpg",
      detail: (
        <>
          <PinIcon className="shrink-0 text-gold" />
          Kenderan, near Ubud
        </>
      ),
    },
  ];
  // Shared by every package in data/packages.
  const included = ["Jungle villa stay", "Daily breakfast", "Spa treatment", "Airport or Ubud pick-up", "Rice field trek to Manuaba Waterfall"];
  return (
    <section className="section section-end bg-mist">
      {/* Grows on tablets too (the photo is hidden there), so the step cards take up the free height. */}
      <div className="section-end-grow container-x grid gap-x-4 gap-y-6 md:max-lg:flex-1 md:gap-x-5 lg:grid-cols-12">
        <div className="relative min-h-56 overflow-hidden md:max-lg:hidden lg:col-span-3">
          {/* Tall frame on a landscape photo: framed on the guests, with sizes covering the cropped width. */}
          <Image
            src="/images/2022/11/welcome-spa-in-ubud.jpg"
            alt="Guests welcomed at Marni Alas Spa"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "72% center" }}
          />
        </div>
        {/* The step cards stretch to the photo's height, so the column has no empty bands. */}
        <div className="flex flex-col gap-5 lg:col-span-9">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
            <Title>How to Book</Title>
            <Button href={whatsapp.ch.href} variant="solid" whatsapp>
              Book on WhatsApp
            </Button>
          </div>
          <ol className="grid flex-1 gap-4 sm:grid-cols-3 md:gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2 border-t-2 border-gold-light bg-white p-4 xl:p-5">
                <span className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-light font-semibold text-white">{i + 1}</span>
                  <span className="card-title">{s.title}</span>
                </span>
                <span className="text-[0.9375rem] leading-snug text-ink-soft">{s.text}</span>
                {/* A steady 2:1 photo where there is room for it (wide, tall screens), never a thin strip. */}
                <span className="relative hidden aspect-[2/1] overflow-hidden lg:max-xl:!hidden [@media(min-height:46rem)]:sm:block">
                  <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 22vw, 33vw" className="object-cover" />
                </span>
                {/* Only where the screen is tall enough to have room for it; short laptops skip it. */}
                <span className="mt-auto hidden items-center gap-2 border-t border-line pt-2.5 text-[0.875rem] text-ink-soft max-sm:flex [@media(min-height:46rem)]:flex">
                  {s.detail}
                </span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-4">
            <p className="label text-mute">Included in every package</p>
            <ul className="flex flex-wrap gap-2">
              {included.map((item) => (
                <li key={item} className="chip">
                  <CheckIcon className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Microblading: booking panel beside a brow close-up. */
export function BrowCta({ book, image, alt }: { book: string; image: string; alt: string }) {
  return (
    <section className="section section-end bg-mist">
      <div className="section-end-grow container-x grid gap-4 md:grid-cols-2 md:gap-5">
        <div className="flex flex-col items-start justify-center border-2 border-gold-light bg-white p-6 sm:p-8">
          <h2 className="card-title text-[1.25rem]">Ready for natural, defined brows?</h2>
          <p className="mt-2 text-ink-soft">Message us on WhatsApp or email to book your brow consultation in Bali.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href={book} variant="solid" whatsapp>
              Book now
            </Button>
            <a
              href={`mailto:${locations.bali.email}?subject=Microblading`}
              className="flex items-center gap-2 text-[0.9375rem] text-ink-soft transition-colors hover:text-gold-ink"
            >
              <MailIcon className="text-gold" />
              {locations.bali.email}
            </a>
          </div>
        </div>
        <div className="relative min-h-64 overflow-hidden">
          <Image src={image} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

/** News: the other stories, photo and text split on the footer's columns. */
export function MoreNews({ title, posts, allLink }: { title: ReactNode; posts: Post[]; allLink?: boolean }) {
  return (
    <section className="section section-end bg-mist">
      <div className="section-end-grow container-x flex flex-col">
        <SectionHead
          title={title}
          action={
            allLink && (
              <Link href="/news/" className="link-arrow">
                All news <ArrowIcon className="text-base" />
              </Link>
            )
          }
        />
        <div className="grid flex-1 gap-4 md:grid-cols-2 md:gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}/`}
              className="group grid grid-cols-[7rem_1fr] gap-x-4 bg-white sm:grid-cols-2 md:gap-x-5"
            >
              <div className="relative min-h-36 overflow-hidden sm:min-h-48 lg:min-h-40">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 7rem"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <div className="flex flex-col justify-center py-5 pr-5">
                <time dateTime={post.date} className="label text-mute">
                  {formatDate(post.date)}
                </time>
                <h3 className="card-title mt-2">{post.title}</h3>
                {/* The opening line, so the text half of the card isn't left mostly empty. */}
                <p className="mt-2 line-clamp-3 text-[0.9375rem] leading-snug text-ink-soft max-sm:hidden">{post.body[0]}</p>
                <span className="link-arrow mt-4">
                  Read more <ArrowIcon className="text-base" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Gallery: from the photos to the places in them. */
export function VisitTeaser() {
  const tiles = [
    { title: "Our Villa", text: "Jungle stays near Ubud", image: "/images/2025/05/villa-in-ubud-marni-alas-villa-62.jpg", href: "/marni-villa-ubud/" },
    { title: "Wellness", text: "Ayurveda & Balinese massage", image: "/images/2025/05/flower-bath-with-view-2.jpg", href: "/wellness-in-bali/" },
    { title: "Packages", text: "Retreats from 4 days", image: "/images/2023/07/Pool.jpg", href: "/package/" },
  ];
  return (
    <section className="section section-end bg-mist">
      <div className="section-end-grow container-x grid gap-x-4 gap-y-6 md:gap-x-5 lg:grid-cols-12">
        <div className="flex flex-col items-start justify-center lg:col-span-3">
          <Title>See it for yourself</Title>
          <p className="mt-3 text-ink-soft">Our villas, spa and garden are 20 minutes’ drive from central Ubud.</p>
          <Button href={whatsapp.ch.href} variant="solid" whatsapp className="mt-5">
            Book via WhatsApp
          </Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3 md:gap-5 lg:col-span-9">
          {tiles.map((t) => (
            <li key={t.href} className="flex">
              <Link
                href={t.href}
                className="group relative isolate flex min-h-48 w-full items-end overflow-hidden p-5 sm:aspect-[4/5] lg:aspect-auto lg:min-h-56"
              >
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                <span className="flex w-full items-end justify-between gap-3">
                  <span>
                    <span className="card-title block text-white">{t.title}</span>
                    <span className="mt-1 block text-[0.9375rem] leading-snug text-white/85">{t.text}</span>
                  </span>
                  <ArrowIcon className="shrink-0 text-xl text-white transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
