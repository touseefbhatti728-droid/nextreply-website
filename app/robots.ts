import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://nextreply.io/sitemap.xml",
    host: "https://nextreply.io",
  };
}
