import TechStack from "@/components/TechStack";
import Interests from "@/components/Interests";

const AboutMe = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-center flex-col space-y-3 text-center">
        <h3>About Me</h3>
        <p className="text-gray-300">
          Discover who I am, what I build, and the passion that drives my work.
        </p>
      </div>
      <div>
        <TechStack />
        <Interests />
      </div>
    </section>
  );
};

export default AboutMe;
