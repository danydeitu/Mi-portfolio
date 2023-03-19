import React from "react";
import "./Slider.css";
import { Link } from 'react-router-dom';

const slidesInfo = [
  {
   
    src:
      "/img/sol.jpg",
    alt: "Projecto 1",
    desc: <a href="https://solylunacasadecampo.com/">Alquiler de Casa</a>
  
   
  },
  {
   
    src:
      "/img/dany.jpg",
    alt: "Projecto 2",
    desc: <a href="https://www.disenowebdany.tech/">Agencia de Desarrollo web</a>
  
   
  },
  {
   
    src:
      "/img/noCountryCinenema.jpg",
    alt: "Projecto 3",
    desc: <a href="https://c4-g17-m.vercel.app/">App Cine NoCountry</a>
  
   
  },
  {
    src:
      "/img/colmena.jpg",
    alt: "Projecto 4",
    desc: <a href="https://github.com/danydeitu/Grupo3---C10/tree/develop">Tienda Productos Miel</a>
  },
  {
    src:
      "/img/mercadoLiebre.jpg",
    alt: "Projecto 5",
    desc:  <a href="mercado-liebre2.vercel.app">Tienda Mercado Tecno</a>,
  },
  {
  src:
  "/img/gifExpert.jpg",
alt: "Projecto 6",
desc: <a href="https://giff-expert.vercel.app/">App Giff Expert</a>
},
{
  src:
    "/img/app-tareas.jpg",
  alt: "Projecto 7",
  desc: <a href="https://tareas-app-topaz.vercel.app/">App Tares</a>
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