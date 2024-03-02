import React from 'react';
import './SocialFollow.css';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import pic5 from '../../assets/images/pic5.jpg';

import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';



const SocialFollow = () => {

  return (
  <div className="social-media-section">
    <h2>#VistaVoyage</h2>
    <p>Follow and tag us on social networks</p>
    <div className="visitor-images">
      <img src={pic1} alt="Entrance to Theme Park" />
      <img src={pic2} alt='Theme Park'/>
      <img src={pic3} alt='People having fun'/>
      <img src={pic4} alt='Scary Ride'/>
      <img src={pic5} alt='People waiting to use this ride!'/>
    </div>
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
  </div>
  );
}

export default SocialFollow
