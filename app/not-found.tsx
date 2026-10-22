import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    // From tablets up, this screen and the footer fit the window together, so the page doesn't scroll.
    <section className="relative isolate flex min-h-[calc(100svh-var(--header-h))] items-center overflow-hidden bg-night-deep md:min-h-[calc(100svh-var(--header-h)-var(--footer-h))]">
      <Image
        src="/images/2025/05/SPA-Beauty-Catalogue_page1_image1.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-70"
      />
      <div className="container-x py-10">
        <h1 className="title-caps text-[clamp(2rem,5vw,3.5rem)] text-gold-light">Page not found</h1>
        <p className="lead mt-4 max-w-lg text-white/85">
          This page has moved or no longer exists. Let us take you back to the retreat.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 max-sm:*:w-full">
          <Button href="/" variant="solid">
            Back to home
          </Button>
          <Button href="/contacts/" variant="light">
            Contacts
          </Button>
        </div>
      </div>
    </section>
  );
}
