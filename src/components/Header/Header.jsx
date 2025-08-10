import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import foto from '../../assets/foto.jpg';
import { FaHome, FaUser, FaCode, FaAddressBook } from 'react-icons/fa';

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
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? 'activo' : ''}
              >
                {({ isActive }) => isActive ? <FaHome title="Inicio" /> : 'Inicio'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre-mi"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? 'activo' : ''}
              >
                {({ isActive }) => isActive ? <FaUser title="Sobre mí" /> : 'Sobre mí'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? 'activo' : ''}
              >
                {({ isActive }) => isActive ? <FaCode title="Proyectos" /> : 'Proyectos'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? 'activo' : ''}
              >
                {({ isActive }) => isActive ? <FaAddressBook title="Contacto" /> : 'Contacto'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
