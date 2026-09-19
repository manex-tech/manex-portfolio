import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
const siteUrl = getSiteUrl();
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: ["/", "/images/"], disallow: ["/studio"] }, sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/image-sitemap.xml`] }; }
