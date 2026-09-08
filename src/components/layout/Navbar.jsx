import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar-bg">
      <nav className="navbar">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Mylena Silva" />
        </a>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>Sobre mim</a>
          <a href="#hobbies" onClick={closeMenu}>Hobbies</a>
          <a href="#education" onClick={closeMenu}>Formação</a>
          <a href="#projects" onClick={closeMenu}>Projetos</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </div>

        <div className="navbar-actions">
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;