import React from 'react';
import './Proyects.scss';

const proyects = [
  {
    name: "Mi primer proyecto",
    description: "Un sitio web estático creado con HTML, CSS y JavaScript.",
    link: "https://raquelrodriguez84.github.io/proyectoJavascript/" // Asegúrate de poner el enlace correcto
  },
  {
    name: "Portfolio en React",
    description: "Este portfolio está construido con React y Sass, donde muestro mis habilidades y proyectos.",
    link: "https://tu-enlace-aqui.com" // Asegúrate de poner el enlace correcto
  },
  {
    name: "Aplicación de notas",
    description: "Una app para tomar notas, creada con React y una API de backend.",
    link: "https://tu-enlace-aqui.com" // Asegúrate de poner el enlace correcto
  }
];

const Projects = () => {
          return (
            <section id="projects" className="projects">
              <h2>Proyectos</h2>
              <div className="project-list">
                {proyects.map((proyect, index) => (
                  <div key={index} className="project">
                    <h3>{proyect.name}</h3>
                    <p>{proyect.description}</p>
                    <a href={proyect.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                  </div>
                ))}
              </div>
            </section>
          );
};

export default Projects;
