import "./HobbyCard.css";

function HobbyCard({ name, image, description, active, onClick }) {
  return (
    <article
      className={`hobby-card ${active ? "active" : ""}`}
      onClick={onClick}
      tabIndex="0"
      role="button"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClick();
        }
      }}
    >
      <img
        className="hobby-card-image"
        src={image}
        alt={`Imagem relacionada a ${name}`}
      />
      <div className="hobby-card-overlay" />
      <div className="hobby-card-content">
        <h3>{name}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default HobbyCard;
