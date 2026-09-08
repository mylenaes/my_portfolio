import { useEffect, useRef, useState } from "react";
import "./Hobbies.css";
import HobbyCard from "../ui/HobbyCard";

import crochetImage from "../../assets/images/croche.jpg";
import runImage from "../../assets/images/correr.jpg";
import guitarImage from "../../assets/images/violao.jpg";
import readImage from "../../assets/images/ler.jpg";
import cookImage from "../../assets/images/cozinhar.jpg";

function Hobbies() {
  const hobbies = [
    {
      name: "Crochê",
      image: crochetImage,
      description:
        "Gosto de 'crochetar' nas horas vagas, é um hobby que me permite fazer coisas úteis para mim mesma.",
    },
    {
      name: "Correr",
      image: runImage,
      description:
        "Correr me libertou, perdi 10kg e sinto-me infinitamente bem quando saio para correr.",
    },
    {
      name: "Violão",
      image: guitarImage,
      description:
        "Um sonho que consegui materializar, sempre tiro um tempinho - todos os dias - para praticar.",
    },
    {
      name: "Leitura",
      image: readImage,
      description:
        "Comecei a ler em 2017 e nunca mais parei. Gosto bastante de literatura brasileira e romances ingleses.",
    },
    {
      name: "Cozinhar",
      image: cookImage,
      description:
        "Tenho muito prazer em cozinhar, especialmente para os outros. Nada melhor que uma comida bem feita.",
    },
  ];

  const [activeHobby, setActiveHobby] = useState(2);
  const hobbyRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth <= 768 && hobbyRefs.current[activeHobby]) {
      hobbyRefs.current[activeHobby].scrollIntoView({
        behavior: "auto",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeHobby]);

  return (
    <section className="hobbies" id="hobbies">
      <div className="hobbies-content">
        <h2>Hobbies</h2>

        <p>Essas são algumas das coisas que eu faço quando não estou estudando :) ...</p>

        <div className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              ref={(element) => {
                hobbyRefs.current[index] = element;
              }}
              className="hobby-card-wrapper"
            >
              <HobbyCard
                name={hobby.name}
                image={hobby.image}
                description={hobby.description}
                active={activeHobby === index}
                onClick={() => setActiveHobby(index)}
              />
            </div>
          ))}
        </div>

        <div className="hobbies-dots">
          {hobbies.map((hobby, index) => (
            <button
              key={hobby.name}
              type="button"
              className={activeHobby === index ? "active" : ""}
              onClick={() => setActiveHobby(index)}
              aria-label={`Selecionar ${hobby.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
