import React from 'react';
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo'>
           <h2>Full Stack Developer</h2> <p>Daniel Rodriguez</p></div>
    </nav>
  )
}
export default Navbar;