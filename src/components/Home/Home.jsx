import './Home.scss';
import { Link } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp } from 'react-icons/fa';

const Inicio = () => {
  return (
    <section className="inicio">
      <div className="inicio__contenido">
        <h2>¡Hola, soy Raquel! </h2>
        <p className="subtitulo">
          Desarrolladora web junior especializada en front-end con React.
        </p>
        <p>
          Me apasiona crear interfaces accesibles, limpias y funcionales.
          Busco mi primera oportunidad profesional donde seguir creciendo y aportar valor.
        </p>

        <div className="inicio__tecnologias">
          <h3>Mis herramientas favoritas:</h3>
          <div className="iconos">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJs title="JavaScript" />
            <FaReact title="React" />
            <FaPhp title="PHP" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Inicio;
