import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "/img/noCountryCinenema.jpg",
    alt: "Projecto 1",
    desc: " Cine NoCountryCinema",
   
  },
  {
    src:
      "/img/mercadoLiebre.jpg",
    alt: "Projecto ",
    desc: "E-commerce MercadoLiebre",
  },
  {
    src:
      "/img/gifExpert.jpg",
    alt: "Projecto 3",
    desc: "App Giff Expert",
  },
  {
    src:
      "/img/app-tareas.jpg",
    alt: "Projecto 4",
    desc: "App tareas",
  },
  {
    src:
      "/img/colmena.jpg",
    alt: "Projecto 5",
    desc: "E-commerce de Miel",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;