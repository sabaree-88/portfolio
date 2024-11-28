import ProjectCard from "./ProjectCard";
import { projectData } from "../data/projectsData";
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-6 px-6 md:px-10 bg-gray-900 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
