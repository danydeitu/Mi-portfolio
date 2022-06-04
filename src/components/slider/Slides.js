import React from 'react';
import "./Slider.css"

const slidesInfo = [
{
    src:"././public/img/noCountryCinenema.jpg ",
    alt: "Proyecto 1",
    desc: "proyecto 1",
},
{
    src:"././public/img/colmena.jpg ",
    alt: "Proyecto 2",
    desc: "proyecto 2",
},
{
    src:"././public/img/mercadoLiebre.jpg ",
    alt: "Proyecto 3",
    desc: "proyecto 3",
},
{
    src:"././public/img/app-tareas.jpg ",
    alt: "Proyecto 4",
    desc: "proyecto 4",
},
{
    src:"././public/img/gifExpert.jpg ",
    alt: "Proyecto 5",
    desc: "proyecto 5",
}
]
const Slides = Slides.map(slide=>(
    <div className='slide-container'>
        <img src={slide.src} alt= {slide.alt}/>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
));
export default Slides;