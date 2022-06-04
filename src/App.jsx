import React, { useState, useEffect } from "react";
import ReactDOM  from 'react-dom';
//estilos
import "./App.css";
//componentes
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//import Slider from "./components/slider/Slider";
//import Slides from "./components/slider/Slides";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
//import Footer from "./components/Footer/Footer";


function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=> {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
useEffect( () => {
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight]);
  
  return (
    <div className="App">
    
      < Navbar />
    < Header />
      < About />
    
      < Education />
      < Experience />

    </div>
  );
}
export default App;
//  < Navbar isScrolling = {scrollHeight} />