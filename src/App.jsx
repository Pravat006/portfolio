import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { Helmet } from 'react-helmet';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SeoManager from "./components/SeoManager.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc] dark:from-[#0b1020] dark:via-[#0f172a] dark:to-[#0b1020] transition-colors duration-300">
      {/* Base SEO settings */}
      <SeoManager />

      {/* Page-specific SEO */}
      <Helmet>
        <title>Frontend Web Developer | React, Next.js, Tailwind CSS Expert</title>
        <meta name="description" content="Experienced frontend developer specializing in building beautiful and highly performant web applications with modern technologies like React, Next.js, and Tailwind CSS." />
        <meta name="keywords" content="frontend developer, web development, React, Next.js, Tailwind CSS, JavaScript" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Your Name",
              "url": "https://yourwebsite.com",
              "jobTitle": "Frontend Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourprofile"
              ],
              "knowsAbout": ["React", "JavaScript", "Next.js", "Tailwind CSS", "Web Development"]
            }
          `}
        </script>
      </Helmet>

      {/* Header navigation */}
      <Header />

      {/* Main content with all sections */}
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
