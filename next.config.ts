import type { NextConfig } from "next";

// Old WordPress post URLs keep working after the move to /news/[slug].
const newsRedirects = [
  ["2022/12/26", "christmas-gift-for-kenderan-family"],
  ["2022/10/15", "first-aid-socialization-at-marnis-villa-ubud"],
  ["2022/08/22", "international-wellness-tourism-conference-festival-iwtcf-2022"],
].map(([date, slug]) => ({
  source: `/${date}/${slug}`,
  destination: `/news/${slug}/`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  // Hide the floating dev badge so it never sits over the page while reviewing.
  devIndicators: false,
  // Fewer variants = fewer Vercel image transformations and less image-cache storage.
  images: {
    qualities: [75],
    // Source photos are at most 2000px wide, so 2048/3840 variants were never sharper.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
    // Image paths are dated and never overwritten in place, so a long TTL is safe.
    minimumCacheTTL: 2678400,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      ...newsRedirects,
      { source: "/beauty-treatment-in-bali", destination: "/wellness-in-bali/#beauty", permanent: true },
      { source: "/services/:slug*", destination: "/wellness-in-bali/#beauty", permanent: true },
    ];
  },
};

export default nextConfig;
