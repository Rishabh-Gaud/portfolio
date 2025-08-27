import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Work from "../components/UI/Work";
import Blog from "../components/UI/Blog";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rishabh Kumar Gaud - Software Development Engineer | AI & Full-Stack Solutions</title>
        <meta name="description" content="Rishabh Kumar Gaud is a Software Development Engineer at CollegeIt with 2+ years of experience in AI, Python, React, Next.js, and cloud technologies. NIT Srinagar graduate building scalable solutions for 10+ universities." />
        <meta name="keywords" content="Rishabh Kumar Gaud, Software Development Engineer, AI Developer, Python Developer, React Developer, Next.js, NIT Srinagar, CollegeIt, Medibuddy, Full-Stack Developer, AWS, Machine Learning" />
        <meta name="author" content="Rishabh Kumar Gaud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rishabh-gaud-portfolio.vercel.app/" />
        <meta property="og:title" content="Rishabh Kumar Gaud - Software Development Engineer" />
        <meta property="og:description" content="Software Development Engineer at CollegeIt specializing in AI, Python, React, Next.js, and cloud technologies. NIT Srinagar graduate with proven results." />
        <meta property="og:image" content="https://rishabh-gaud-portfolio.vercel.app/images/profile.jpeg" />
        <meta property="og:site_name" content="Rishabh Kumar Gaud Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rishabh-gaud-portfolio.vercel.app/" />
        <meta name="twitter:title" content="Rishabh Kumar Gaud - Software Development Engineer" />
        <meta name="twitter:description" content="Software Development Engineer at CollegeIt specializing in AI, Python, React, Next.js, and cloud technologies." />
        <meta name="twitter:image" content="https://rishabh-gaud-portfolio.vercel.app/images/profile.jpeg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://rishabh-gaud-portfolio.vercel.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rishabh Kumar Gaud",
              "jobTitle": "Software Development Engineer",
              "description": "Software Development Engineer at CollegeIt with expertise in AI, Python, React, Next.js, and cloud technologies. NIT Srinagar graduate.",
              "url": "https://rishabh-gaud-portfolio.vercel.app/",
              "image": "https://rishabh-gaud-portfolio.vercel.app/images/profile.jpeg",
              "sameAs": [
                "https://linkedin.com/in/rishabhgaud7800",
                "https://github.com/Rishabh-Gaud",
                "https://instagram.com/riishabhgaud",
                "https://www.leetcode.com/rishabh-gaud"
              ],
              "knowsAbout": ["Python", "JavaScript", "TypeScript", "AI", "Machine Learning", "React", "Next.js", "AWS", "Full-Stack Development"],
              "alumniOf": "National Institute of Technology Srinagar",
              "worksFor": "CollegeIt",
              "workLocation": "India"
            })
          }}
        />
      </Head>
      <Hero />
      <Services />
      <Work />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </Fragment>
  );
}
