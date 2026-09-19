import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { getPhotos } from "./photos";

export const dynamic = "force-dynamic";

const projects = [
  { name: "Nexmesh", type: "Connectivity · IoT", copy: "A LoRa mesh platform for resilient messaging and distress signals when ordinary mobile networks are unavailable.", index: "01" },
  { name: "FUTB SmartCampus", type: "Civic tech · Education", copy: "An intelligent university management concept designed around the real rhythms of student and campus life.", index: "02" },
  { name: "Manex Technologies", type: "Company · Innovation", copy: "The home for practical experiments across cybersecurity, embedded systems, automation and digital products.", index: "03" },
];

const chapters = [
  ["01", "Curiosity first", "Long before the titles, I was the person who wanted to know what was behind the screen, why a system worked, and how it could work better."],
  ["02", "Learning by building", "Cybersecurity became my foundation, but my interests kept expanding: programming, IoT, embedded systems, product thinking and visual storytelling."],
  ["03", "Building from Nigeria", "From Kaduna to Federal University of Technology, Babura, I am building with what I have, documenting the process and turning constraints into creative direction."],
  ["04", "The long game", "My ambition is bigger than a single product. I want to build world-class companies, create opportunities and leave behind technology that solves real problems."],
];

const permanentPhotos = [
  { id: "techfest-medal", src: "/images/muhammad-aliyu-tukur-futb-techfest-medal.jpg", alt: "Muhammad Aliyu Tukur, known as Manex, wearing a FUTB TechFest 2.0 cap and displaying his medal", caption: "FUTB TechFest 2.0 — a proud builder's moment", year: "2026" },
  { id: "techfest-session", src: "/images/manex-futb-techfest-session.jpg", alt: "Manex participating in a technology session at Federal University of Technology Babura", caption: "Inside the room where ideas become projects", year: "2026" },
  { id: "futb-campus", src: "/images/muhammad-aliyu-tukur-futb-campus.jpg", alt: "Muhammad Aliyu Tukur seated in a lecture hall at Federal University of Technology Babura", caption: "Learning, observing and building at FUTB", year: "2026" },
  { id: "traditional-attire", src: "/images/manex-nigerian-traditional-attire.jpg", alt: "Manex wearing peach Nigerian traditional attire and a red cap", caption: "Rooted in culture, looking toward the future", year: "2026" },
  { id: "red-cap-portrait", src: "/images/manex-portrait-red-cap.jpg", alt: "Close portrait of Muhammad Aliyu Tukur in Nigerian traditional attire and a red cap", caption: "Muhammad Aliyu Tukur — Manex", year: "2026" },
  { id: "outdoor-portrait", src: "/images/muhammad-aliyu-tukur-portrait.jpg", alt: "Outdoor portrait of Muhammad Aliyu Tukur, Nigerian cybersecurity student and founder known as Manex", caption: "Building from Nigeria, thinking globally", year: "2026" },
];

const experience = [
  { period: "Sep 2026 — Present", role: "Cybersecurity / IT Intern", organisation: "Defence Industries Corporation of Nigeria (DICON)", location: "Kaduna, Nigeria", copy: "Developing practical experience within a technology environment while connecting academic cybersecurity knowledge with the operations of a major Nigerian industrial institution." },
  { period: "Oct 2024 — Present", role: "Assistant Cashier", organisation: "Karamah LPG Plant", location: "Ungwan Mu’azu, Kaduna", copy: "Supports payments and receipts, daily account records, customer service, and stock and sales reconciliation in an active LPG retail environment." },
  { period: "2026", role: "Technical Lead", organisation: "FUTB TechFest 2.0", location: "Federal University of Technology, Babura", copy: "Contributed technical leadership to the planning and delivery of the university technology festival and its hackathon activities." },
];

const skills = [
  ["Cybersecurity", "Developing practical skills"], ["Networking", "Foundational knowledge"], ["Python", "Beginner"], ["Java", "Academic exposure"], ["Web development", "Builds basic websites"], ["ESP32 & IoT", "Research and pre-build development"],
];

const opportunities = ["Cybersecurity internships", "IT internships", "Startup collaborations", "Website projects", "IoT & hardware projects", "Content partnerships"];

export default async function Home() {
  const photos = await getPhotos();
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Muhammad Aliyu Tukur", alternateName: "Manex", email: "mailto:manextech0@gmail.com", jobTitle: "Founder, Cybersecurity Student and Technology Builder", worksFor: [{ "@type": "Organization", name: "Manex Technologies" }, { "@type": "Organization", name: "Karamah LPG Plant" }], affiliation: [{ "@type": "Organization", name: "Defence Industries Corporation of Nigeria" }, { "@type": "CollegeOrUniversity", name: "Federal University of Technology, Babura" }], alumniOf: { "@type": "CollegeOrUniversity", name: "Federal University of Technology, Babura" }, knowsAbout: ["Cybersecurity", "Computer Networking", "Python", "Java", "Web Development", "Internet of Things", "ESP32", "Startups", "Photography"], knowsLanguage: ["English", "Hausa", "Arabic", "Korean"], nationality: { "@type": "Country", name: "Nigeria" }, sameAs: ["https://x.com/manextech", "https://github.com/ManexTech0", "https://t.me/ManexTech"] };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Manex home">M<span>°</span></a>
        <div className="navLinks"><a href="#story">Story</a><a href="#experience">Experience</a><a href="#work">Work</a><a href="#journal">Journal</a></div>
        <a className="contactLink" href="mailto:manextech0@gmail.com">Let&apos;s talk <ArrowUpRight size={16} /></a>
      </nav>
      <header id="top" className="hero shell">
        <div className="eyebrow"><span /> Kaduna, Nigeria · Building globally</div>
        <figure className="heroPortrait"><Image src="/images/manex-main.webp" alt="Muhammad Aliyu Tukur, known as Manex, wearing traditional Nigerian attire" width={1024} height={1536} priority /><figcaption>Portrait 001 · Manex</figcaption></figure>
        <h1>Muhammad<br /><em>Aliyu Tukur.</em></h1>
        <div className="heroBottom">
          <p>I&apos;m <strong>Manex</strong> — a cybersecurity student, founder and multidisciplinary builder turning ambitious ideas into useful technology.</p>
          <a href="#story" className="roundButton" aria-label="Read my story">Explore<br />my story <span>↓</span></a>
        </div>
        <div className="marquee" aria-label="Areas of focus"><span>CYBERSECURITY</span><i>✦</i><span>STARTUPS</span><i>✦</i><span>IoT</span><i>✦</i><span>AUTOMATION</span><i>✦</i><span>STORYTELLING</span></div>
      </header>
      <section id="story" className="story shell section">
        <div className="sectionTag"><span>01</span> The autobiography</div>
        <div className="storyIntro"><h2>I build because<br />I&apos;m endlessly <em>curious.</em></h2><p>This is the story of a young Nigerian technologist learning in public, starting before everything is perfect, and connecting disciplines that are usually kept apart.</p></div>
        <div className="chapterGrid">
          {chapters.map(([number, title, copy]) => <article className="chapter" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
        <blockquote>“The goal is not just to enter the future. It is to help build it.”</blockquote>
      </section>
      <section className="profileFacts section"><div className="shell">
        <div className="sectionTag light"><span>02</span> Education & public profile</div>
        <div className="factsLead"><h2>Learning across<br/><em>classrooms and real life.</em></h2><p>Born and raised in Kaduna, Manex began exploring technology before university and remains largely self-taught beyond formal lectures.</p></div>
        <div className="factGrid">
          <article><GraduationCap/><span>Education</span><h3>B.Sc. Cybersecurity</h3><p>300 level · School of Computing<br/>Federal University of Technology, Babura<br/>2025 — expected 2028</p></article>
          <article><BriefcaseBusiness/><span>Current status</span><h3>Student, founder & builder</h3><p>Founder and CEO of Manex Technologies, technology content creator, startup builder, employee and intern.</p></article>
          <article><Sparkles/><span>Motivation</span><h3>Useful technology</h3><p>Driven by curiosity, real Nigerian problems, company building and the ambition to create meaningful jobs and opportunities.</p></article>
        </div>
        <div className="valuesLine"><span>Faith & integrity</span><span>Continuous learning</span><span>Creativity & independence</span><span>Photography & videography</span></div>
      </div></section>
      <section id="experience" className="experience shell section">
        <div className="sectionTag"><span>03</span> Experience</div>
        <div className="experienceHeading"><h2>Work that builds<br/><em>range and discipline.</em></h2><p>Experience across industrial technology, financial operations, student leadership and startup development.</p></div>
        <div className="timeline">{experience.map((item, index) => <article key={item.role}><div className="timelineNo">0{index + 1}</div><div className="timelineWhen">{item.period}<small>{item.location}</small></div><div className="timelineBody"><p>{item.organisation}</p><h3>{item.role}</h3><span>{item.copy}</span></div></article>)}</div>
      </section>
      <section className="capabilities section"><div className="shell">
        <div className="sectionTag light"><span>04</span> Skills, learning & credentials</div>
        <div className="capabilityGrid"><div><h2>An honest view<br/>of where I am.</h2><p>Manex is building breadth deliberately: strong curiosity, growing practical exposure and no inflated labels.</p></div><div className="skillList">{skills.map(([skill,level]) => <div key={skill}><strong>{skill}</strong><span>{level}</span></div>)}</div></div>
        <div className="credentialGrid"><article><span>Certification</span><h3>Introduction to Cybersecurity</h3><p>Cisco Networking Academy · Foundational credential</p></article><article><span>Training</span><h3>Computer Training Certificate</h3><p>Foundational computer literacy and practical systems training</p></article><article><span>Languages</span><h3>English · Hausa</h3><p>Arabic — basic · Korean — beginner</p></article></div>
      </div></section>
      <section id="work" className="work section"><div className="shell">
        <div className="sectionTag light"><span>05</span> Selected work</div>
        <div className="workHeading"><h2>Ideas with<br /><em>real-world weight.</em></h2><p>Projects across communication, education, security and everyday infrastructure.</p></div>
        <div className="projectList">{projects.map((project) => <article className="project" key={project.name}><span className="projectIndex">{project.index}</span><div><p className="projectType">{project.type}</p><h3>{project.name}</h3><p className="projectCopy">{project.copy}</p></div><ArrowUpRight className="projectArrow" size={30} /></article>)}</div>
      </div></section>
      <section id="journal" className="journal shell section">
        <div className="sectionTag"><span>06</span> Photo journal</div>
        <div className="journalHeading"><h2>Proof of the <em>process.</em></h2><p>People, prototypes, presentations and moments from the journey.</p></div>
        <div className="photoGrid">{[...permanentPhotos, ...photos.map(photo => ({ ...photo, src: `/api/photos/${photo.id}` }))].map((photo, i) => <figure className={i % 5 === 0 ? "photoWide" : ""} key={photo.id}><Image src={photo.src} alt={photo.alt} title={photo.caption} width={1200} height={900} unoptimized={photo.src.startsWith("/api/")} /><figcaption><span>{photo.caption}</span><time>{photo.year}</time></figcaption></figure>)}</div>
      </section>
      <section className="now shell section"><div className="nowCard"><Sparkles size={22} /><p>Currently exploring</p><h2>Where cybersecurity, hardware and human stories meet.</h2><div className="nowMeta"><span><MapPin size={15} /> Nigeria</span><span>Open to bold collaborations</span></div></div></section>
      <section className="opportunities shell"><p>Open to</p><div>{opportunities.map(item => <span key={item}>{item}</span>)}</div></section>
      <section className="contactDirectory shell section"><div className="sectionTag"><span>07</span> Connect</div><div className="contactGrid">
        <a href="mailto:manextech0@gmail.com"><span>Email</span><strong>manextech0@gmail.com</strong><ArrowUpRight /></a>
        <a href="https://x.com/manextech" target="_blank" rel="me noreferrer"><span>X / Twitter</span><strong>@manextech</strong><ArrowUpRight /></a>
        <a href="https://github.com/ManexTech0" target="_blank" rel="me noreferrer"><span>GitHub</span><strong>@ManexTech0</strong><ArrowUpRight /></a>
        <a href="https://t.me/ManexTech" target="_blank" rel="me noreferrer"><span>Telegram</span><strong>@ManexTech</strong><ArrowUpRight /></a>
        <a href="https://wa.me/2348138206195" target="_blank" rel="noreferrer"><span>WhatsApp / Call</span><strong>+234 813 820 6195</strong><ArrowUpRight /></a>
        <a href="https://discord.com/users/manextech" target="_blank" rel="me noreferrer"><span>Discord</span><strong>@manextech · @tryrekall</strong><ArrowUpRight /></a>
      </div></section>
      <footer><div className="shell footerTop"><p>Have an idea worth building?</p><a href="mailto:manextech0@gmail.com">Let&apos;s make it real. <ArrowUpRight /></a></div><div className="shell footerBottom"><span>© {new Date().getFullYear()} Muhammad Aliyu Tukur</span><span>Known as Manex</span><Link href="/studio">Private studio</Link></div></footer>
    </main>
  );
}
