import type { MetadataRoute } from "next";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manex.manextech.chatgpt.site";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: ["/", "/images/"], disallow: ["/studio"] }, sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/image-sitemap.xml`] }; }
