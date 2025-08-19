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

      <SeoManager />


      <Helmet>
        <title>Fullstack Web Developer | React, Next.js, Tailwind CSS </title>
        <meta name="description" content="Experienced fullstack developer specializing in building beautiful and highly performant web applications with modern technologies like React, Next.js, and Tailwind CSS." />
        <meta name="keywords" content="fullstack developer, web development, React, Next.js, Tailwind CSS, JavaScript ,Typescript, Prisma, PostgreSQL" />
        <meta name="author" content="Pravat Behera" />
        <script type="application/ld+json">

          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pravat Behera",
              "url": "https://pravat.tech/",
            
              "worksFor": {
                "@type": "Student",
                "name": "Self-Employed"
              },
              "sameAs": [
                "https://github.com/Pravat006",
                "https://linkedin.com/in/pravat-behera-1339ba302"
              ],
              "knowsAbout": ["React", "JavaScript", "Next.js", "Tailwind CSS", "Web Development","Express", "PostgreSQL","MongoDB"]
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main className="pt-16">
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
