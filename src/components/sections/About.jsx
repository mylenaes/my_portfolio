import "./About.css";
import { Heart } from "lucide-react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>Algumas coisas sobre mim...</h2>

        <p>
          Eu tenho 23 anos, curso Engenharia de Software na Universidade
          Federal do Ceará (UFC) — sempre quis estudar numa universidade pública
          — e sou natural de Juazeiro do Norte. Tenho um perfil bastante
          criativo, orientado à resolução de problemas e vivo em função de
          aprender o máximo de coisas que conseguir ao longo da minha vida.
          Meu grande objetivo é construir experiência profissional para entrar
          no mercado de trabalho antes de concluir a graduação. Minha cor
          favorita é azul. <Heart size={16} fill="currentColor" className="heart"/>
        </p>
      </div>
    </section>
  );
}

export default About;