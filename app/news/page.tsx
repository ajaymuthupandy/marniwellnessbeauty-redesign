import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoreNews } from "@/components/Closers";
import { ArrowIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { formatDate, posts } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and community stories from Marni Alas Retreat in Kenderan, Ubud: village gifts, team training and the wellness tourism events we join.",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        title="News"
        text="Stories from our team and the Kenderan community."
        image="/images/2022/05/puri-manuaba-tour.jpeg"
      />

      <section className="section">
        <div className="container-x">
          {/* Latest post: same image/text split as the post page. */}
          <Link href={`/news/${lead.slug}/`} className="group grid bg-mist lg:grid-cols-12">
            <div className="relative aspect-[3/2] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-12">
              <time dateTime={lead.date} className="label text-mute">
                {formatDate(lead.date)}
              </time>
              <h2 className="title mt-3">{lead.title}</h2>
              <p className="mt-4 text-ink-soft">{lead.body[0]}</p>
              <span className="link-arrow mt-6">
                Read more <ArrowIcon className="text-base" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <MoreNews title="Earlier Stories" posts={rest} />
    </>
  );
}
