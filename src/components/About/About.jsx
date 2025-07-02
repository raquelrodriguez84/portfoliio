
import './About.scss';


const About = () => {
    return (
        <section className="about-me ">
            <h2>Sobre mí</h2>

            <div className="about-me__text">
                <p>
                    Soy Raquel Rodríguez García, auxiliar de clínica veterinaria que ha decidido reinventarse como desarrolladora web.
                    Tras completar mi formación en Desarrollo de Aplicaciones Web, he realizado prácticas profesionales en IC Antequera.
                </p>

                <h3>Formación</h3>
          <p>
            Bachillerato Tecnológico (finalizado en junio de 2002), que me proporcionó una base sólida en matemáticas, ciencias y tecnología.
          </p>
          <p>
            Ciclo Formativo de Desarrollo de Aplicaciones Web (DAW) en Davante, finalizado el 14 de marzo de 2025, donde me especialicé en tecnologías front-end modernas.
          </p>

          <h3>Experiencia práctica</h3>
          <p>
            Realicé un periodo de prácticas de <strong>376 horas</strong> en IC, la editorial, desde el 16 de marzo hasta el 30 de mayo de 2025, trabajando en un proyecto real llamado <strong>Kreator</strong>, un editor para contenidos de e-learning.  
            Mi labor principal fue desarrollar templates personalizados para el editor usando React y TipTap, aportando funcionalidades clave para una experiencia de edición completamente editable y flexible.
          </p>
          <p>
            Durante estas prácticas, también trabajé con metodologías ágiles como <strong>Scrum</strong> y <strong>Kanban</strong>, participando en la organización y seguimiento de tareas para asegurar entregas efectivas y colaborativas.
          </p>
          <p>
            Además, utilicé <strong>GitHub</strong> para control de versiones, gestión de repositorios y colaboración en proyectos de desarrollo.
          </p>
          <p>Entre los templates que creé, totalmente editables con TipTap, se incluyen:</p>
          <ul>
            <li>Galería de imágenes</li>
            <li>Carrousel de imágenes</li>
            <li>Lista gráfica con imágenes y texto editable</li>
            <li>Botonera tipo acordeón</li>
          </ul>

                
                <h3>Habilidades</h3>
                <ul>
                    <li>JavaScript, React, HTML5, CSS3, SASS</li>
                    <li>PHP, MySQL, REST APIs</li>
                    <li>Experiencia con TipTap y desarrollo de editores personalizados</li>
                    <li>Trabajo en equipo, adaptabilidad y aprendizaje rápido</li>
                </ul>

                <h3>Objetivo profesional</h3>
                <p>
                    Busco una oportunidad para seguir creciendo como desarrolladora web, aportar mis conocimientos y aprender en un entorno profesional que valore la innovación y la creatividad.
                </p>
            </div>

        </section>
    );
};

export default About;
