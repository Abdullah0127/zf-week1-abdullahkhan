import "../styles/SkillBadge.css"
import SkillBadge from "../components/SkillBadge";
import skills from "../data/skills";
import { useEffect } from "react";

function Skills() {
  useEffect(()=>{
      document.title = "Abdullah Khan | Skills";
    }, [])
  return (
    <section className="skills-section">

      <div className="skills-heading">
        <h1>My Skills</h1>
        <p>
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <SkillBadge
  key={skill.id}
  name={skill.name}
  icon={skill.icon}
/>
        ))}
      </div>

    </section>
  );
}

export default Skills;