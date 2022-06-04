import React from 'react';
import "./About.css";
   

const About = () => {
  return (
    <div className='About-container'>
      <div className='about-img'>
      <img src="././img/mi foto.jpg" width={450} height={350} alt="about"/>
   </div>
   <div className='about-desc'>
      <h3>SOBRE MI</h3>
      <p>SOY UNA PERSONA CREATIVA,ME GUSTA TRABAJAR EN EQUIPO ,CON
PREDISPOSICIÓN ,ME GUSTA MUCHO LA
INFORMÁTICA Y LA PROGRAMACIÓN Y TENGO
MUCHAS GANAS DE SEGUIR APRENDIENDO NUEVAS TECNOLOGIAS</p>
     </div>

     <div className='About-contact'>
<h2>Contactame</h2>
<p>llamame: 1130118854
  </p>
  <p>enviame un email: danydeitu18@gmail.com</p>
</div>

     </div>
     
  )
}
export default About;
   
