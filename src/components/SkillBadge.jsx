import "../styles/SkillBadge.css";

function SkillBadge({ name, icon: Icon }) {
  return (
    <div className="skill-badge">
      <Icon className="skill-icon" />
      <span>{name}</span>
    </div>
  );
}

export default SkillBadge;