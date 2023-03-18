import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>San Miguel Bs. As.</p>
        <p>Telefono +54 011 40941119</p>
      </div>
      
     
      <div className="footer-sns">
        <div className="design-by">Mis Redes Sociales</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/daniel-alberto-rodriguez/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/danydeitu" target="_blank" rel="noreferrer">
            <i className="fab fa-github github" ></i>
          </a>
          
          <a href="mailto:danydeitu18@gmail.com"  target="_blank" rel="noreferrer">
            <i className="fab fa-google google"></i>
          </a>
          <a href="https://wa.me/5491140941119" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp whatsapp"></i>
          </a>
          
        </div>
        <div className="footer-contact">
        
        <p>©Diseñado por Dany</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;