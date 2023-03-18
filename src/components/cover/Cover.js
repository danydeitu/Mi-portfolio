import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h2>Daniel Rodriguez </h2>
      <h3>Programador Web Full Stack | Front End</h3> 
      <h3>Estudiante de Telecomunicaciones</h3>
    </div>
  );
};

export default Cover;