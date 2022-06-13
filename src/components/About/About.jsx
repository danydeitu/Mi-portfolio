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
PROGRAMACIÓN Y APRENDER NUEVAS TECNOLOGIAS.</p>
     </div>

     <div className='About-contact'>
<h2>CONTACTO</h2>
<p>LLAMAR: <a href='celular'> 1130118854</a>
  </p>
  <p>EMAIL: <a href='danydeitu18@gmail.com'> danydeitu18@gmail.com</a></p>
  <p>LINKEDIN: <a href='https://www.linkedin.com/in/daniel-alberto-rodriguez/'>https://www.linkedin.com/in/daniel-alberto-rodriguez</a></p>
  <p> GITHUB: <a href = 'https://github.com/danydeitu'> https://github.com/danydeitu</a></p>

</div>

     </div>
     
  )
}
export default About;
   
