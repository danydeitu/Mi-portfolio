import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Daniel Rodriguez</h3>
        <p>San Miguel Bs. As.</p>
      </div>
      <div className="footer-contact">
        <h3>Contacto por</h3>
        <p>Mis Redes Sociales</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseñado por D@niel</div>
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
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;