import React from 'react';
import './SocialFollow.css';
import pic1 from '../../assets/images/pic1.jpg';

import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';



const SocialFollow = () => {

  return (
  <div className="social-media-section">
    <h2>#VistaVoyage</h2>
    <p>Follow and tag us on social networks</p>
    <div className="visitor-images">
      <img src={pic1} alt="Entrance to Theme Park" />
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
