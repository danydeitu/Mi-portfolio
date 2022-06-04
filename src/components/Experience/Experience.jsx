import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience-container">
      <h3>EXPERIENCIA LABORAL</h3>
     
      <h4>NO COUNTRY</h4>
        <p>MARZO 2022 |ABRIL 2022  DESARROLLO DE UNA PÁGINA WEB DE
        RESERVA Y COMPRA DE ENTRADAS DE CINE,CON UN EQUIPO DE 10 PROGRAMADORES Y
        UN TEAM LÍDER CON METODOLOGÍAS AGILES SCRUM, TÉCNOLOGIAS NODE.JS CON SUS
        DEPENDENCIAS CON MONGODB Y PARA EL FRONT UTILIZAMOS REACT.JS</p>
        <h4>DIGITAL HOUSE</h4>
         <p>JUNIO |DICIEMBRE 2021 | DESARROLLO DE E COMMERCE |  CREACION DE UN
        PROYECTO DE E-COMMERCE DESDE EL MAQUETADO HASTA LA FUNCIONALIDAD.
        APLICACION DE TECNOLOGÍAS HTML, CSS,NODE
        JAVASCRIPT,EXPRESS,MYSQL(SEQUALIZE)
      </p>
      <div className="Experience-Proyectos">
<div className="title">
  <h2>Mis Proyectos</h2>
</div>
<div className="Proyecto1">
<img src="././img/noCountryCinenema.jpg"  width={150} height ={200} alt="noCountryCinema"/>
      </div>
      <div className="Proyecto2">
<img src="././img/colmena.jpg" width={150} height ={200} alt="colmena"/>
      </div>
      <div className="Proyecto3">
<img src="././img/mercadoLiebre.jpg" width={150} height ={200} alt="mercadoLiebre"/>
      </div>
      <div className="Proyecto4">
<img src="././img/app-tareas.jpg" width={150} height ={200}
alt="app-tareas"/>
      </div>
      <div className="Proyecto5">
<img src="././img/gifExpert.jpg" width={150} height ={200} alt="gifExpert"/>
      </div>

      </div>

    </div>
    )};

export default Experience;
