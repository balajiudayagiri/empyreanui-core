import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        "Googlebot",
        "Bingbot",
        "Googlebot-Image",
        "Googlebot-News",
        "Googlebot-Video",
        "msnbot-media", // Bing's image bot
        "DuckDuckBot",
        "Slurp",
        "Baiduspider",
        "Yandex",
        "Sogou web spider",
        "Applebot",
        "Facebot",
        "LinkedInBot",
        "Pinterest",
      ],
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://empyreanui-core.vercel.app//sitemap.xml",
  };
}
