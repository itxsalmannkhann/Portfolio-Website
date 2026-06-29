import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: "Salman Khan",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07163D",
    theme_color: "#07163D",
    icons: [{ src: "/favicon.png", sizes: "any", type: "image/svg+xml" }],
  };
}
