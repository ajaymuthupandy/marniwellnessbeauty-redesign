import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, ClockIcon, PinIcon } from "@/components/icons";
import { PackageCard } from "@/components/PackageCard";
import { Reviews } from "@/components/Reviews";
import { Button, SectionHead, SmartLink, Title } from "@/components/ui";
import { featuredPackages } from "@/data/packages";
import { reviews } from "@/data/reviews";
import { locations, specialOffer, whatsapp } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const destinations = [
  {
    title: "Bali – Indonesia",
    text: "Heritage and luxury wellness & beauty, with complete Ayurveda care.",
    image: "/images/2022/11/ubud-resort-luxury-villa-in-ubud4.jpg",
    href: "/bali/",
  },
  {
    title: "Erlenbach – Switzerland",
    text: "A touch of Bali on Lake Zurich. A blessing for body and soul.",
    image: "/images/2016/10/mahottama-beauty-spa-massage-s.jpg",
    href: "http://mmarni.ch/",
  },
];

const heroLinks = [
  { label: "Wellness", text: "Ayurveda & Balinese massage", href: "/wellness-in-bali/" },
  { label: "Our Villa", text: "Jungle stays near Ubud", href: "/marni-villa-ubud/" },
  { label: "Packages", text: "Retreats from 4 days", href: "/package/" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100dvh-var(--header-h))] flex-col overflow-hidden bg-night-deep">
        <Image
          src="/images/2025/05/SPA-Beauty-Catalogue_page1_image1.jpg"
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/60 via-black/25 to-black/10" />
        <div className="container-x flex flex-1 items-center py-16">
          <div className="max-w-3xl">
            <h1 className="title-caps text-[clamp(2.25rem,5.6vw,4.25rem)] text-gold-light">
              Marni Alas
              <br />
              Spa &amp; Retreat
            </h1>
            <p className="lead mt-5 max-w-xl text-white/90">
              Your destination for wellness and beauty in Ubud, Bali, and Erlenbach, Switzerland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-sm:*:w-full">
              <Button href="/bali/" variant="solid">
                Explore Bali
              </Button>
              <Button href={whatsapp.ch.href} variant="light" whatsapp>
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </div>
        <nav aria-label="Highlights" className="border-t border-white/15 bg-black/30 backdrop-blur-sm">
          <ul className="container-x grid sm:grid-cols-3">
            {heroLinks.map((l) => (
              // Padding sits on the item (not the link), so only the first item drops its left padding.
              <li key={l.href} className="border-white/15 max-sm:not-last:border-b sm:px-6 sm:not-first:border-l sm:first:pl-0 sm:last:pr-0">
                <Link
                  href={l.href}
                  className="group flex items-center justify-between gap-4 py-4 text-white lg:py-5"
                >
                  <span>
                    <span className="label block text-gold-light">{l.label}</span>
                    <span className="mt-1 block text-[0.9375rem] text-white/80">{l.text}</span>
                  </span>
                  <ArrowIcon className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Welcome, destinations and the Swiss studio share one band */}
      <section className="section">
        <div className="container-x grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          <div className="flex flex-col items-start justify-center border-2 border-gold-light p-6 sm:p-8 md:col-span-2 lg:col-span-4">
            {/* The gold emblem from the logo, cropped above its lettering. */}
            <div aria-hidden="true" className="relative -ml-3.5 mb-3 h-[4.5rem] w-24 overflow-hidden">
              <Image src="/images/2025/05/Marni-Logo.png" alt="" width={96} height={96} className="absolute inset-x-0 top-0 size-24" />
            </div>
            <Title>Welcome</Title>
            <p className="mt-3">
              Discover rejuvenation at Marni Alas Spa: a holistic approach to well-being, expert therapists and treatments
              tailored to your needs.
            </p>
            <Button href="/bali/" className="mt-6">
              About us
            </Button>
          </div>
          {destinations.map((d) => (
            <SmartLink key={d.title} href={d.href} className="group flex flex-col bg-mist lg:col-span-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
                <h3 className="card-title text-[1.125rem]">{d.title}</h3>
                <p className="mt-2 flex-1 text-ink-soft">{d.text}</p>
                <span className="link-arrow mt-4">
                  Explore more <ArrowIcon className="text-base" />
                </span>
              </div>
            </SmartLink>
          ))}

          <div className="grid overflow-hidden bg-mist md:col-span-2 lg:col-span-12 lg:grid-cols-12">
            <div className="relative aspect-[731/332] lg:col-span-7">
              <Image
                src="/images/2025/06/Kosmetik-Studio-Im-Hof-photos.jpg"
                alt="Kosmetikstudio im Hof in Erlenbach: the studio, and Marni in her treatment room"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <Title as="h3">{locations.swiss.name}</Title>
              <ul className="space-y-2 text-ink-soft">
                <li className="flex gap-3">
                  <PinIcon className="mt-1 shrink-0 text-gold" />
                  {locations.swiss.address.join(", ")}
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-1 shrink-0 text-gold" />
                  {locations.swiss.hours}
                </li>
              </ul>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href={locations.swiss.booking} variant="solid">
                  Book on Treatwell
                </Button>
                <SmartLink href={locations.swiss.website} className="link-arrow">
                  mmarni.ch <ArrowIcon className="text-base" />
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section bg-mist">
        <div className="container-x">
          <SectionHead
            title="Our Bali Packages"
            action={
              <Link href="/package/" className="link-arrow">
                All packages <ArrowIcon className="text-base" />
              </Link>
            }
          />
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:gap-5 lg:grid-cols-4">
            {featuredPackages.map((p) => (
              <PackageCard key={p.slug} pkg={p} className="w-[80%] shrink-0 snap-start sm:aspect-[3/4] sm:w-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* Special offer */}
      <section className="section">
        <div className="container-x grid gap-4 md:gap-5 lg:grid-cols-12">
          <a
            href={specialOffer.book}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto block aspect-[4/5] w-full max-w-md overflow-hidden lg:col-span-4 lg:max-w-none xl:col-span-3"
          >
            {/* A landscape photo in a 4:5 frame, so sizes covers the cropped-away width too. */}
            <Image
              src={specialOffer.image}
              alt={specialOffer.imageAlt}
              fill
              sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ objectPosition: "62% center" }}
            />
          </a>
          <div className="flex flex-col justify-center border-2 border-gold-light p-6 sm:p-8 lg:col-span-8 lg:p-10 xl:col-span-9">
            <Title>Special Offers</Title>
            <p className="card-title mt-4 text-[1.25rem] text-ink">{specialOffer.title}</p>
            <p className="mt-1 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[2.25rem] font-semibold leading-tight tracking-wide text-gold-ink">{specialOffer.price}</span>
              <span className="label text-mute">{specialOffer.note}</span>
            </p>
            <ul className="mt-5 grid gap-x-6 gap-y-3 border-t border-line pt-5 sm:grid-cols-2 xl:grid-cols-3">
              {specialOffer.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-soft">
                  <CheckIcon className="mt-0.5 shrink-0 text-lg text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={specialOffer.book} variant="solid" whatsapp>
                Book this offer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Reviews reviews={reviews} />
    </>
  );
}
