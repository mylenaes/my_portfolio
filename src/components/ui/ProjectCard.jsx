import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

function ProjectCard({ icon: Icon, type, title, description, link }) {
  return (
    <article className="project-card">
      <div className="project-card-icon">
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <span className="project-card-type">{type}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      {link && (
        <a
          className="project-card-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Ver repositório
          <ArrowUpRight size={16} />
        </a>
      )}
    </article>
  );
}
export default ProjectCard;