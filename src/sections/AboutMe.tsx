import SectionHead from "@/components/SectionHead";
import AboutMeCard from "@/components/CustomCards";
import InterestsDragDrop from "@/components/InterestsDragDrop";
import TechStackCarousel from "@/components/TechStackCarousel";

const AboutMe = () => {
  return (
    <section className="container pt-30 py-5" id="about-me">
      <SectionHead
        title="About Me"
        heading="Who am I"
        description="Get to know me, the tools I work with, and the hobbies and interests that keep me curious and motivated."
      />
      <div className="py-10 flex gap-6 flex-col md:flex-row">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold">My Story</h2>
          <p className="mt-2">...</p>
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <TechStack />
          <Interests />
        </div>
      </div>
    </section>
  );
};

const Interests = () => {
  return (
    <AboutMeCard
      title="🧩 Beyond Code"
      description="Learn more about my interests and hobbies."
      content={() => <InterestsDragDrop />}
    />
  );
};

const TechStack = () => {
  return (
    <AboutMeCard
      title="🔧 My Toolbox"
      description="A look at the tools and technologies that power my work in web development and beyond."
      content={() => <TechStackCarousel />}
    />
  );
};

export default AboutMe;
