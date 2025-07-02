import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import foto from '../../assets/foto.jpg';

const Header = () => {
  const logo = "Raquel Rodríguez García";
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
        <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }} />
        ))}
      </div>
      <div className="container">
        <div className="top">
          <img src={foto} alt="Raquel Rodríguez García" className="profile-pic" />
          <h1 className="logo">{logo}</h1>
          {/* Botón hamburguesa visible solo en móvil */}
          <button className="hamburguesa" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <nav className={`nav ${menuOpen ? 'abierto' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</Link></li>
            <li><Link to="/proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
            <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  
  );
};

export default Header;