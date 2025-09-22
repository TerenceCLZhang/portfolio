import { ProjectCard } from "@/components/SectionCards";
import projects from "../data/projects.json";
import Section from "@/components/Sections";

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      heading="What I've Built"
      description="A showcase of some of the projects I've built, highlighting my skills in software development, problem solving, and experimenting with new ideas."
      content={
        <div className="w-full flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 w-full md:min-w-[400px] max-w-[500px]"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Projects;
