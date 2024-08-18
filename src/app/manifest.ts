import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EmpyreanUI - The Ultimate UI Library",
    short_name: "EmpyreanUI",
    description:
      "Discover the best user-created UI elements including animated components, buttons, cards, loaders, and more with EmpyreanUI.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/public/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/public/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/public/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
