import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MoreNews } from "@/components/Closers";
import { ArrowIcon } from "@/components/icons";
import { formatDate, getPost, posts } from "@/data/news";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Page not found", robots: { index: false } };
  return {
    title: post.title,
    description: `${post.body[0]} News from Marni Alas Retreat in Kenderan, Ubud, Bali.`,
    alternates: { canonical: `/news/${post.slug}/` },
    openGraph: { images: [post.image] },
  };
}

// Every post is fully prerendered from generateStaticParams.
export const ensureStatic = "navigation";

export default function PostPage({ params }: PageProps<"/news/[slug]">) {
  return (
    <Suspense>
      <PostView params={params} />
    </Suspense>
  );
}

async function PostView({ params }: { params: PageProps<"/news/[slug]">["params"] }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <article className="section">
        <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[26rem]">
            <Image src={post.image} alt={post.title} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center lg:col-span-5">
            <Link href="/news/" className="link-arrow mb-5 text-mute hover:text-gold-ink">
              <ArrowIcon className="rotate-180 text-base" /> All news
            </Link>
            <time dateTime={post.date} className="label text-mute">
              {formatDate(post.date)}
            </time>
            <h1 className="title mt-2">{post.title}</h1>
            <div className="mt-4 space-y-4 text-ink-soft">
              {post.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {post.extraImages && (
            <div className="grid grid-cols-2 gap-4 md:gap-5 lg:col-span-12">
              {post.extraImages.map((src, i) => (
                <div key={src} className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${post.title}, photo ${i + 2}`}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      <MoreNews title="More News" posts={others} allLink />
    </>
  );
}
