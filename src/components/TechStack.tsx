import AboutMeCard from "./AboutMeCard";
import TechStackCarousel from "./TechStackCarousel";

const TechStack = () => {
  return (
    <AboutMeCard
      title="My Toolbox"
      description="A look at the tools and technologies that power my work in web development and beyond."
      content={() => <TechStackCarousel />}
    />
  );
};

export default TechStack;
