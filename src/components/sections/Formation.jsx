import "./Formation.css";

function Formation() {
  const timeline = [
    {
      year: "2023 — atual",
      title: "Engenharia de Software",
      place: "Universidade Federal do Ceará — UFC",
      type: "Formação",
    },
    {
      year: "2024",
      title: "IHC 2024",
      place: "Evento acadêmico",
      type: "Evento",
    },
    {
      year: "2025",
      title: "Front-End Day",
      place: "Evento de tecnologia",
      type: "Evento",
    },
    {
      year: "2025",
      title: "Siará Tech Summit",
      place: "Evento de tecnologia",
      type: "Evento",
    },
    {
      year: "2025",
      title: "Curso de HTML e CSS",
      place: "Origamid",
      type: "Curso",
    },
    {
      year: "2025",
      title: "Oracle Cloud Infrastructure",
      place: "Oracle University",
      type: "Certificação",
    },
    {
      year: "2025",
      title: "JavaScript Essentials 1 e 2",
      place: "Cisco Networking Academy",
      type: "Curso",
    },
  ];

  return (
    <section className="formation" id="education">
      <div className="formation-content">
        <h2>Formação</h2>

        <p className="formation-intro">
          Minha formação inclui vários cursos que fiz ao longo do meu estágio em 2025 e alguns eventos voltados para minha área.
        </p>

        <div className="formation-timeline">
          <div className="formation-line" />

          {timeline.map((item, index) => (
            <article
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
              key={`${item.title}-${item.year}`}
            >
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>

                <div className="timeline-card">
                  <span className="timeline-type">{item.type}</span>

                  <h3>{item.title}</h3>

                  <span className="timeline-place">{item.place}</span>
                </div>
              </div>

              <div className="timeline-dot" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Formation;