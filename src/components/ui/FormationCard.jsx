import "./FormationCard.css";

function FormationCard({
  title,
  subtitle,
  description,
  image,
  active,
  onClick,
}) {
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <article
      className={`formation-card ${active ? "active" : ""}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <img
        className="formation-card-image"
        src={image}
        alt={`Imagem relacionada a ${title}`}
      />

      <div className="formation-card-overlay" />

      <div className="formation-card-content">
        <h3>{title}</h3>
        <span>{subtitle}</span>
        <p>{description}</p>
      </div>
    </article>
  );
}
export default FormationCard;