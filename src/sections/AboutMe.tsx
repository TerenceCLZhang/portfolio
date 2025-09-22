import TechStackDragDrop from "@/components/TechStackDragDrop";
import InterestsCarousel from "@/components/InterestsCarousel";
import Image from "next/image";
import { File, Github, Linkedin } from "lucide-react";
import { AboutCard } from "@/components/SectionCards";
import { ButtonLink } from "@/components/CustomButtons";
import Link from "next/link";
import Section from "@/components/Sections";

const AboutMe = () => {
  return (
    <Section
      id="about-me"
      title="About Me"
      heading="Who am I"
      description="Get to know me, the tools I work with, and the hobbies and interests that keep me curious and motivated."
      content={
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <MainAboutMeCard />
            <Socials />
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <TechStack />
            <Interests />
          </div>
        </div>
      }
    />
  );
};

const MainAboutMeCard = () => {
  return (
    <AboutCard
      title="👦🏻 Terence Zhang"
      direction="left"
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
              I am a 2025 University of Auckland graduate with a{" "}
              <b>BSc. (Honours) in Computer Science with First Class Honours</b>
              . Passionate about problem-solving and software development, I
              bring a solid foundation in algorithms, data structures, and
              software engineering. My research experience has honed my
              analytical thinking and attention to detail. I thrive in
              collaborative environments and aim to build{" "}
              <b>innovative, reliable, and impactful solutions</b>. Learn more
              about my{" "}
              <Link href="/academics" className="text-link">
                academic journey here
              </Link>
              .
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
      title="⛓️‍💥 Find Me Online"
      // description="Links to my professional network, open-source work, and CV / Résumé"
      direction="left"
      content={() => (
        <div className="flex flex-col w-full gap-3 md:flex-row md:gap-0 md:justify-evenly">
          <ButtonLink
            content="LinkedIn"
            link="https://www.linkedin.com/in/terence-chun-lin-zhang/"
            icon={<Linkedin />}
            newTab={true}
          />
          <ButtonLink
            content="GitHub"
            link="https://github.com/TerenceCLZhang"
            icon={<Github />}
            newTab={true}
          />
          <ButtonLink
            content="CV / Résumé"
            link="/TerenceZhangCV.pdf"
            icon={<File />}
            newTab={true}
          />
        </div>
      )}
    />
  );
};

const TechStack = () => {
  return (
    <AboutCard
      title="🔧 My Toolbox"
      description="Explore the languages, frameworks, and tools I rely on to build my projects."
      direction="right"
      content={() => <TechStackDragDrop />}
    />
  );
};

const Interests = () => {
  return (
    <AboutCard
      title="🧩 Beyond Code"
      description="Learn more about my interests and hobbies when I'm not coding."
      direction="right"
      content={() => <InterestsCarousel />}
    />
  );
};

export default AboutMe;
