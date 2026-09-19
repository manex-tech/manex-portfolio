import Link from "next/link";

export const metadata = { title: "Photo studio", robots: { index: false, follow: false } };

export default function Studio() {
  return <main className="studioPage"><div className="studioShell">
    <header className="studioHeader"><Link href="/">M<span>°</span></Link></header>
    <section className="studioLocked"><p>Photo studio</p><h1>The public gallery is ready.</h1><span>Cloud photo uploads will be enabled after a Vercel-compatible storage provider is connected.</span><Link href="/">Return to portfolio</Link></section>
  </div></main>;
}
