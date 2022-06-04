import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='footer-info'>
<h2>Daniel Rodriguez</h2>
<p>San Miguel Bs. As.</p></div>
<div className='footer-contatc'>
  <p>llamame: 1130118854
  </p>
  <p>enviame un email: danydeitu18@gmail.com</p>
</div>

<div className='media-links'>
    <a h ref="htpp://facebook.com" target="_blank" rel='noreferrer'>
        <i className='fab fa-linkedin linkedin'></i>
    </a>
    <a h ref="htpp://tweeter.com" target="_blank">
        <i className='fab fa-tweeter tweeter'></i>
    </a>
    <a h ref="htpp://facebook.com" target="_blank">
        <i className='fab fa-facebook facebook'></i>
    </a>
</div>

    </footer>
  )
}
export default Footer;