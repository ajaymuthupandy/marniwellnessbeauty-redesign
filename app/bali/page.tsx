import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PinIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Button, Title } from "@/components/ui";
import { locations } from "@/data/site";

export const metadata: Metadata = {
  title: "About Marni Alas Retreat in Ubud, Bali",
  description:
    "Marni Alas Retreat in Ubud, Bali: Ayurveda and Balinese massage, beauty treatments and jungle villas near the Manuaba Palace.",
  alternates: { canonical: "/bali/" },
};

const tiles = [
  {
    title: "Wellness",
    text: "Feel our treatments & Balinese massage",
    image: "/images/2026/09/Treatment-and_Massage.jpg",
    href: "/wellness-in-bali/",
  },
  {
    title: "Our Villa",
    text: "Escape to our villa & embrace nature",
    image: "/images/2026/09/one-bedroom-villa.jpg",
    href: "/marni-villa-ubud/",
  },
  {
    title: "Beauty",
    text: "Microblading, facial, rejuvenation and more",
    image: "/images/2022/11/wellness-spa-in-ubud-bali-spa8.jpg",
    // Framed on the client's facial, below the staff uniform's logo.
    position: "center 85%",
    href: "/wellness-in-bali/#beauty",
  },
];

const skills = ["Classic & anti-aging facial", "Microblading", "Microneedling", "BB glow", "Hydrafacial", "Bali & honey massage"];

export default function BaliPage() {
  return (
    <>
      <PageHero
        variant="split"
        title="Welcome to Bali"
        text="Ubud is Bali’s cultural heart, set among rice paddies and steep ravines in the foothills of Gianyar."
        image="/images/2026/09/welcome-to-bali.jpg"
      >
        <Button href="/wellness-in-bali/" variant="solid">
          Our treatments
        </Button>
        <Button href="/marni-villa-ubud/">Our villa</Button>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-4 md:gap-5">
          {/* Wellness, villa and beauty as one bento block */}
          <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
            {tiles.map((t, i) => (
              <a
                key={t.title}
                href={t.href}
                className={`group relative isolate flex min-h-64 items-end overflow-hidden p-6 sm:p-8 ${
                  i === 0 ? "md:row-span-2 md:min-h-[34rem]" : ""
                }`}
              >
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: t.position ?? "center" }}
                />
                <span className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                <span className="flex w-full items-end justify-between gap-4">
                  <span>
                    <span className="title-caps block text-[clamp(1.375rem,2.2vw,1.75rem)] text-white">{t.title}</span>
                    <span className="mt-1 block font-light text-white/85">{t.text}</span>
                  </span>
                  <span className="grid size-11 shrink-0 place-items-center border border-white/60 text-white transition-colors group-hover:border-gold-light group-hover:bg-gold-light">
                    <ArrowIcon className="text-lg" />
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Ayurveda and the founder side by side */}
          <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
            <Link href="/wellness-in-bali/" className="group relative isolate flex min-h-80 items-end overflow-hidden p-6 sm:p-8">
              <Image
                src="/images/2022/11/wellness-spa-in-ubud-bali-spa25.jpg"
                alt="Shirodhara Ayurveda treatment at Marni Alas Spa"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 82%" }}
              />
              <span className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <span className="max-w-md">
                <span className="title block text-white">Ayurveda Massage</span>
                <span className="mt-2 block text-white/85">
                  An ancient system of medicine, lifestyle and philosophy from India, woven into life in Bali.
                </span>
                <span className="link-arrow mt-4 text-gold-light">
                  Read more <ArrowIcon className="text-base" />
                </span>
              </span>
            </Link>

            <div className="flex flex-col justify-center gap-5 bg-mist p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/2025/05/marniphotos-200x200-1.jpg"
                  alt="Marni, founder of Marni Wellness & Beauty"
                  width={200}
                  height={200}
                  className="size-24 shrink-0 rounded-full object-cover ring-2 ring-gold-light ring-offset-4 ring-offset-mist"
                />
                <div>
                  <Title as="h2">Meet Marni</Title>
                  <Image
                    src="/images/2022/05/mani-ttd.png"
                    alt="Marni’s signature"
                    width={300}
                    height={100}
                    className="mt-1 h-10 w-auto"
                  />
                </div>
              </div>
              <p className="text-ink-soft">
                Born in Bali and living in Switzerland since 1993, Marni holds a diploma in Medical Cosmetics and has run her
                own cosmetic studio in Erlenbach since 2019.
              </p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              <div>
                <Button href="/contacts/">Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay and location close the page: photo, details and map on the footer's columns. */}
      <section className="section section-end bg-mist">
        <div className="section-end-grow container-x grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          <div className="relative min-h-64 overflow-hidden md:max-lg:hidden lg:col-span-3">
            <Image
              src="/images/2026/09/stay-at-marni-alas-retreat.jpg"
              alt="Stay at Marni Alas Retreat"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* No box: the text starts right on the column line the footer's Bali address starts on. */}
          <div className="flex flex-col items-start justify-center gap-4 py-2 lg:col-span-6">
            <Title>Stay at Marni Alas Retreat</Title>
            <p className="text-ink-soft">
              Stay in our jungle villas in Kenderan, with the spa, yoga and rice-field walks on your doorstep.
            </p>
            <p className="flex gap-3 text-ink-soft">
              <PinIcon className="mt-1 shrink-0 text-gold" />
              5 minutes’ walk to the Manuaba Palace · 20 minutes’ drive to central Ubud
            </p>
            <Button href="/marni-villa-ubud/" variant="solid">
              View rooms
            </Button>
          </div>
          <iframe
            title="Map: Marni Alas Retreat, Ubud"
            src={locations.bali.map}
            loading="lazy"
            className="h-64 w-full border-0 bg-mist grayscale-[30%] md:h-full md:min-h-64 lg:col-span-3"
          />
        </div>
      </section>
    </>
  );
}
