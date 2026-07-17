import "../styles/ProjectCard.css"

function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;