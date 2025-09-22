import ParticlesBackground from "@/components/BackgroundParticles";
import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main className="flex flex-col items-center flex-grow section-padding">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
