import "../styles/ProjectCard.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/data";
import { useEffect } from "react";

function Projects() {

  useEffect(()=>{
      document.title = "Abdullah Khan | Project";
    }, [])
  return (
    <section className="projects-section">
      <div className="projects-heading">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've built using React and JavaScript.</p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;