import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Daniel Rodriguez</h3>
        <p>San Miguel Bs. As.</p>
        <p>Telefono +54 011 30118854</p>
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
          <a href="https://wa.me/5491130118854" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp whatsapp"></i>
          </a>
          
        </div>
        <div className="footer-contact">
        
        <p>Diseñado por D@niel</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;