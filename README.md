# Manex Portfolio

Official portfolio and autobiography of Muhammad Aliyu Tukur, known as Manex.

## Run locally

```bash
pnpm install
pnpm dev
```

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Keep the detected Next.js framework settings.
3. Leave **Output Directory** empty so Vercel uses the standard `.next` output.
4. Add `NEXT_PUBLIC_SITE_URL` with the final production URL, for example `https://manextech.com`.
5. Redeploy after adding or changing the domain.

The public portfolio and permanent gallery deploy without additional services. The private upload studio needs a Vercel-compatible database and object storage provider before uploads can be enabled on Vercel.

## Connect Google Search Console

1. Add the final domain as a property in Google Search Console.
2. For a custom domain, DNS TXT verification is preferred. Add Google's TXT record at the domain registrar.
3. Alternatively, choose the HTML tag method and copy only the value inside `content="..."`.
4. Add that value in Vercel as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then redeploy and click **Verify** in Search Console.
5. Submit `/sitemap.xml` and `/image-sitemap.xml` in Search Console.

Keep one primary domain and redirect every alternate host to it. Search ranking is not guaranteed; publish useful, original project case studies and earn genuine links to the portfolio over time.
