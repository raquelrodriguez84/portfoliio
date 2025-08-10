import './Home.scss';
//import { Link } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp} from 'react-icons/fa';

const Inicio = () => {
  return (
    <section className="inicio">
      <div className="inicio__contenido">
        <h2>¡Hola, soy Raquel! </h2>
        <p className="subtitulo">
          Desarrolladora web junior
        </p>
        <p>
          Comencé mi formación en Desarrollo de Aplicaciones Web en Davante Academy en septiembre
          de 2023 y finalicé el 14 de marzo de 2025. Dos días después, el 16 de marzo, inicié mis 
          prácticas en IC Antequera, donde trabajé hasta el 30 de junio de 2025.
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
