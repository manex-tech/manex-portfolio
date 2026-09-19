import Link from "next/link";
import { env } from "cloudflare:workers";
import { requireChatGPTUser, chatGPTSignOutPath } from "../chatgpt-auth";
import { getPhotos } from "../photos";
import PhotoManager from "./photo-manager";

export const dynamic = "force-dynamic";
export const metadata = { title: "Private studio", robots: { index: false, follow: false } };

export default async function Studio() {
  const user = await requireChatGPTUser("/studio");
  const adminEmail = String((env as unknown as Record<string, unknown>).ADMIN_EMAIL || "").toLowerCase();
  const allowed = Boolean(adminEmail && user.email.toLowerCase() === adminEmail);
  const photos = allowed ? await getPhotos() : [];
  return <main className="studioPage"><div className="studioShell">
    <header className="studioHeader"><Link href="/">M<span>°</span></Link><div><span>{user.email}</span><a href={chatGPTSignOutPath("/")}>Sign out</a></div></header>
    {!allowed ? <section className="studioLocked"><p>Private studio</p><h1>This account is not authorised yet.</h1><span>Ask Manex to configure this ChatGPT email as the site owner.</span><Link href="/">Return to portfolio</Link></section> : <><section className="studioIntro"><p>Private studio</p><h1>Shape the visual story.</h1><span>Add finished photographs with short, searchable descriptions. They appear in the public journal immediately.</span></section><PhotoManager initialPhotos={photos} /></>}
  </div></main>;
}
