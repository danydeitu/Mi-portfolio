import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de mi</h3>
        <p>
         Soy Programador web Full Stack y Estudiante de Telecomunicaciones y Tecnologias 4.0</p>
         <p>Realizo Trabajos Freelance de Creacion de Paginas Web </p>
         <p>Apasionado por la Informatica, me gusta trabajar en equipo y aprender nuevas tecnologias
        </p>
      </div>
      <div className="about-img">
        <img
          src="\img\mi foto.jpg" 
          alt="about"/>
      </div>
    </div>
  );
};

export default About;