import type { Metadata, Viewport } from "next";
import { Fira_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_NAME, SITE_URL } from "@/data/site";
import "./globals.css";

// One family across the site, matching the Marni Alas logo lettering.
const fira = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Villa & Spa in Ubud | Marni Alas Retreat",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Marni Alas Spa & Retreat: Ayurveda, Balinese massage, beauty treatments and jungle villas in Ubud, Bali, and a cosmetic studio in Erlenbach, Switzerland.",
  icons: { icon: "/images/2022/05/cropped-pavicon.jpg", apple: "/images/2022/05/cropped-pavicon.jpg" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: ["/images/2022/11/ubud-resort-luxury-villa-in-ubud4.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior lets Next.js turn off smooth scrolling during route changes.
    <html lang="en" className={fira.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="label sr-only z-50 bg-gold-light px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
