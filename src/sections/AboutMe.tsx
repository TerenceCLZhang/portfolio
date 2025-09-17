import TechStack from "@/components/TechStack";
import Interests from "@/components/Interests";
import SectionHead from "@/components/SectionHead";

const AboutMe = () => {
  return (
    <section className="container" id="about-me">
      <SectionHead
        title="About Me"
        heading="Who am I"
        description="Discover who I am, what I build, and the passion that drives my work."
      />
      <div>
        <TechStack />
        <Interests />
      </div>
    </section>
  );
};

export default AboutMe;
