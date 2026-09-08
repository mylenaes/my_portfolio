import { useState } from "react";
import { SendIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

import linkedinIcon from "../../assets/images/linkedin.svg";
import githubIcon from "../../assets/images/github.svg";
import instagramIcon from "../../assets/images/instagram.svg";

import "./Contact.css";

function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function sendEmail(event) {
    event.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "SEU_SERVICE_ID",
        "SEU_TEMPLATE_ID",
        event.currentTarget,
        {
          publicKey: "SUA_PUBLIC_KEY",
        },
      );

      setStatus("Mensagem enviada com sucesso!");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("Não foi possível enviar a mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contato</h2>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={sendEmail}>
            <p>Para mais informações, entre em contato comigo:</p>

            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              required
            />

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />

            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Digite sua mensagem"
              required
            />

            <button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
              <SendIcon size={16} />
            </button>

            {status && <span className="contact-status">{status}</span>}
          </form>

          <div className="contact-socials">
            <h3>Redes Sociais</h3>

            <div className="contact-socials-list">
              <a
                href="https://www.linkedin.com/in/mylena-silva-nascimento-185b60262/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="" />
              </a>

              <a
                href="https://github.com/mylenaes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="" />
              </a>

              <a
                href="https://www.instagram.com/mylenas.n"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;