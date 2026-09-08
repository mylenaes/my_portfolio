import { BriefcaseBusiness, Code2, Headphones, WalletCards } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      icon: Headphones,
      type: "Experiência",
      title: "Atendente de Telemarketing",
      description:
        "Experiência de 8 meses no suporte ao cliente do Nubank, lidando com resolução ágil de problemas e tomada de decisão em cenários de alta demanda.",
    },
    {
      icon: BriefcaseBusiness,
      type: "Experiência",
      title: "Estágio Front-end",
      description:
        "Experiência de estágio como bolsista na FASTEF, no qual eu realizei diversos cursos e tive duas vivências práticas de projeto, em grupo e individual.",
    },
    {
      icon: WalletCards,
      type: "Projeto",
      title: "Divance",
      description:
        "Aplicação web de gerenciamento financeiro desenvolvida com React, Node.js, Express e PostgreSQL, na qual eu desenvolvi a ideia do projeto e liderei a parte do Front-end.",
      link: "https://github.com/mylenaes/divance-frontend",
    },
    {
      icon: Code2,
      type: "Projeto",
      title: "MindHub",
      description:
        "Projeto colaborativo desenvolvido durante o estágio, colocando em prática conceitos de desenvolvimento web.",
      link: "https://github.com/Dockzn/MindHub-Frontend",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projetos & Experiências</h2>

        <p className="projects-intro">
          Experiências profissionais e projetos práticos que contribuíram para
          minha formação e desenvolvimento pessoal.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              type={project.type}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;