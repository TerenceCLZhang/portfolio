import SectionHead from "@/components/SectionHead";
import TechStackDragDrop from "@/components/TechStackDragDrop";
import InterestsCarousel from "@/components/InterestsCarousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { File, Github, Linkedin } from "lucide-react";
import { AboutCard } from "@/components/SectionCards";

const AboutMe = () => {
  return (
    <section className="container pt-30 py-5 max-w-5xl" id="about-me">
      <SectionHead
        title="About Me"
        heading="Who am I"
        description="Get to know me, the tools I work with, and the hobbies and interests that keep me curious and motivated."
      />
      <div className="py-10 flex gap-6 flex-col lg:flex-row">
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <MainAboutMeCard />
          <Socials />
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <TechStack />
          <Interests />
        </div>
      </div>
    </section>
  );
};

const MainAboutMeCard = () => {
  return (
    <AboutCard
      title="👤 Terence Zhang"
      content={() => (
        <div className="text-justify">
          <Image
            src="/profile.jpg"
            alt="Picture of Terence Zhang"
            width={200}
            height={200}
            className="float float-left mr-4 mb-2 border-5 border-primary rounded-full w-[200px] h-[200px] object-cover"
          />
          <div className="space-y-5">
            <p>
              I am a 2025 University of Auckland graduate with a BSc. (Honours)
              in Computer Science with <b>First Class Honours</b>. Passionate
              about problem-solving and software development, I bring a solid
              foundation in algorithms, data structures, and software
              engineering. My research experience has honed my analytical
              thinking and attention to detail. I thrive in collaborative
              environments and aim to build{" "}
              <b>innovative, reliable, and impactful solutions</b>.
            </p>
            <p>
              I primarily work with <b>React</b>, <b>Next.js</b>,{" "}
              <b>Tailwind CSS</b>, and <b>TypeScript</b>, while also proficient
              in Python, JavaScript, and Java.
            </p>
          </div>
        </div>
      )}
    />
  );
};

const Socials = () => {
  return (
    <AboutCard
      title="⛓️‍💥 Reach Out & Connect"
      content={() => (
        <div className="flex flex-col w-full space-y-3 md:flex-row md:space-y-0 md:justify-evenly">
          <Button asChild size="lg">
            <Link
              href="https://www.linkedin.com/in/terence-chun-lin-zhang/"
              target="_blank"
              aria-label="Visit Terence Zhang's LinkedIn profile"
            >
              <Linkedin /> LinkedIn
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link
              href="https://github.com/TerenceCLZhang"
              target="_blank"
              aria-label="Visit Terence Zhang's GitHub profile"
            >
              <Github /> GitHub
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link
              href="/TerenceZhangCV.pdf"
              target="_blank"
              aria-label="View Terence Zhang's CV"
            >
              <File /> CV / Résumé
            </Link>
          </Button>
        </div>
      )}
    />
  );
};

const TechStack = () => {
  return (
    <AboutCard title="🔧 My Toolbox" content={() => <TechStackDragDrop />} />
  );
};

const Interests = () => {
  return (
    <AboutCard
      title="🧩 My Interests Beyond Code"
      content={() => <InterestsCarousel />}
    />
  );
};

export default AboutMe;
