const images = [
  ["/images/manex-main.png", "Muhammad Aliyu Tukur — Manex", "Official portrait of Nigerian technologist and founder Muhammad Aliyu Tukur"],
  ["/images/muhammad-aliyu-tukur-futb-techfest-medal.jpg", "Muhammad Aliyu Tukur at FUTB TechFest 2.0", "Manex displaying his medal at FUTB TechFest 2.0"],
  ["/images/manex-futb-techfest-session.jpg", "Manex at a FUTB technology session", "Muhammad Aliyu Tukur participating in a technology event at FUTB"],
  ["/images/muhammad-aliyu-tukur-futb-campus.jpg", "Muhammad Aliyu Tukur at FUTB", "Manex in a lecture hall at Federal University of Technology Babura"],
  ["/images/manex-nigerian-traditional-attire.jpg", "Manex in Nigerian traditional attire", "Muhammad Aliyu Tukur wearing peach traditional attire"],
  ["/images/manex-portrait-red-cap.jpg", "Portrait of Muhammad Aliyu Tukur", "Manex wearing a red cap and Nigerian traditional attire"],
  ["/images/muhammad-aliyu-tukur-portrait.jpg", "Muhammad Aliyu Tukur portrait", "Outdoor portrait of Nigerian cybersecurity student and founder Manex"],
];
export function GET(request: Request) { const origin = new URL(request.url).origin; const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"><url><loc>${origin}/</loc>${images.map(([src,title,caption])=>`<image:image><image:loc>${origin}${src}</image:loc><image:title>${title}</image:title><image:caption>${caption}</image:caption></image:image>`).join("")}</url></urlset>`; return new Response(body,{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=3600"}}); }
