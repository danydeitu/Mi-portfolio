import React from 'react';
import "./Header.css";
import headerVideo from "../../media/headerVideo.mp4";


const Header = () => {
  return (
    <div className='header-container'>
      <video className= "video" src={headerVideo} autoPlay loap muted />
      
      
      </div>
  )
}
export default Header;
   