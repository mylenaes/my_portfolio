import "./Home.css";
import foto from "../../assets/images/foto.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <p className="home-greeting">Olá,</p>

          <h1>eu sou <span>Mylena Silva</span></h1>

          <p className="home-role">Frontend Developer</p>
        </div>

        <div className="home-image">
          <img src={foto} alt="Mylena Silva"/>
        </div>
      </div>
    </section>
  );
}
export default Home;