const fallbackSiteUrl = "https://manex.manextech.chatgpt.site";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return fallbackSiteUrl;

  const candidate = /^https?:\/\//i.test(configured) ? configured : `https://${configured}`;

  try {
    return new URL(candidate).origin;
  } catch {
    return fallbackSiteUrl;
  }
}
