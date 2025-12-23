import Head from "next/head";
import Navbar from "@/components/Navbar";
import { components } from "@/data/layout";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Munees Tariq | Full-Stack Developer & Web App Specialist</title>
        <meta name="title" content="Munees Tariq | Full-Stack Developer & Web App Specialist" />
        <meta name="description" content="Munees Tariq - Full-stack developer specializing in modern web apps, SaaS dashboards, APIs, React, Next.js, Node.js, Shopify, WordPress, and custom full-stack solutions. Hire Munees Tariq for high-performance web development." />
        <meta name="keywords" content="Munees Tariq, Munees, Tariq, Full Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js Developer, Frontend Developer, Backend Developer, SaaS Developer, API Developer, Shopify Developer, WordPress Developer, JavaScript Developer, TypeScript Developer, Portfolio, moojntariq, moon-folio, Software Engineer, Web App Developer, Pakistan Developer" />
        <meta name="author" content="Munees Tariq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://moon-folio.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moon-folio.vercel.app/" />
        <meta property="og:title" content="Munees Tariq | Full-Stack Developer & Web App Specialist" />
        <meta property="og:description" content="Munees Tariq - Full-stack developer specializing in modern web apps, SaaS dashboards, APIs, and custom full-stack solutions. High-performance apps, React, Next.js, Node.js." />
        <meta property="og:site_name" content="Munees Tariq Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://moon-folio.vercel.app/" />
        <meta name="twitter:title" content="Munees Tariq | Full-Stack Developer & Web App Specialist" />
        <meta name="twitter:description" content="Munees Tariq - Full-stack developer specializing in modern web apps, SaaS dashboards, APIs, and custom full-stack solutions." />
        <meta name="twitter:creator" content="@muneesstariq" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-title" content="Munees Tariq" />
        <meta name="application-name" content="Munees Tariq Portfolio" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Munees Tariq",
              "alternateName": "moontariq",
              "url": "https://moon-folio.vercel.app/",
              "email": "moojntariq@gmail.com",
              "jobTitle": "Full-Stack Developer",
              "description": "Full-stack developer specializing in modern web apps, SaaS dashboards, APIs, React, Next.js, and custom solutions.",
              "knowsAbout": ["Web Development", "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Shopify", "WordPress", "APIs", "SaaS"],
              "sameAs": []
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="scroll-smooth">
        {components.map((component, id)=>
          <div key={id} id={component.id}>
            {component.render}
          </div>
        )}
      </main>
    </>
  );
}


