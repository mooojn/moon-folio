import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experiences from "@/sections/Experiences";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Munees Tariq | Product Engineer</title>
        <meta name="title" content="Munees Tariq | Product Engineer" />
        <meta name="description" content="Product engineer crafting considered digital experiences with Next.js, React and Node.js." />
        <meta name="keywords" content="Munees Tariq, Munees, Tariq, Full Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js Developer, Frontend Developer, Backend Developer, SaaS Developer, API Developer, Shopify Developer, WordPress Developer, JavaScript Developer, TypeScript Developer, Portfolio, moojntariq, moon-folio, Software Engineer, Web App Developer, Pakistan Developer" />
        <meta name="author" content="Munees Tariq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://moon-folio.vercel.app/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moon-folio.vercel.app/" />
        <meta property="og:title" content="Munees Tariq | Product Engineer" />
        <meta property="og:description" content="Product engineering from first brief to final release." />
        <meta property="og:site_name" content="Munees Tariq Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Munees Tariq | Product Engineer" />
        <meta name="twitter:description" content="Product engineering from first brief to final release." />
        <meta name="twitter:creator" content="@muneesstariq" />

        {/* Theme */}
        <meta name="theme-color" content="#f7f8f6" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Munees Tariq",
              "url": "https://moon-folio.vercel.app/",
              "email": "moojntariq@gmail.com",
              "jobTitle": "Product Engineer",
              "description": "Product engineer building considered digital experiences.",
              "knowsAbout": ["Web Development", "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Shopify", "WordPress", "APIs", "SaaS"],
              "sameAs": ["https://github.com/mooojn", "https://linkedin.com/in/munees-tariq"]
            })
          }}
        />
      </Head>

      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
      </main>
    </>
  );
}
