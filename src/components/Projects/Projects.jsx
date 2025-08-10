import React from 'react';
import './Projects.scss';

const projects = [
  {
    name: "CRUD con PHP y MySQL (MVC)",
    description: "Aplicación web para crear, leer, actualizar y borrar datos usando PHP, MySQL y arquitectura MVC.",
    link: "https://github.com/raquelrodriguez84/php_CRUD"
  },
  {
    name: "Proyecto interactivo con JavaScript puro",
    description: "Web interactiva desarrollada con JavaScript puro, jQuery y Lightbox.",
    link: "https://raquelrodriguez84.github.io/proyectoJavascript/",
    code: "https://github.com/raquelrodriguez84/proyectoJavascript"
  },
  {
    name: "Juego de Memoria",
    description: "Juego de cartas en JavaScript puro para ejercitar la memoria.",
    link: "https://raquelrodriguez84.github.io/memory-game-js/",
    code: "https://github.com/raquelrodriguez84/memory-game-js"
  },
  {
    name: "Portfolio Personal",
    description: "Mi portfolio web creado con React y Sass, donde muestro mis proyectos y habilidades.",
    link: "https://github.com/raquelrodriguez84/portfoliio" 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
