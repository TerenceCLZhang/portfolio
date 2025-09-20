import { ProjectCard } from "@/components/SectionCards";
import SectionHead from "@/components/SectionHead";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="container pt-30 py-5 max-w-5xl" id="projects">
      <SectionHead
        title="Projects"
        heading="What I've Built"
        description="A showcase of some of the projects I've built, demonstrating my skills in software development, problem-solving, and innovative solutions."
      />
      <div className="py-10 w-full flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <div key={index} className="flex-1 lg:min-w-[400px] max-w-[500px]">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
