import React from 'react'
import FacebookIcon from '../../assets/images/Facebook.png';
import InstagramIcon from '../../assets/images/Instagram.jpg';
import YoutubeIcon from '../../assets/images/youtube.png';


const SocialFollow = () => {
    const images = [
        { src: 'path_to_your_image1.jpg', alt: 'Description 1' },
        { src: 'path_to_your_image2.jpg', alt: 'Description 2' },
        { src: 'path_to_your_image3.jpg', alt: 'Description 3' },
      ];

  return (
  <div className="social-follow-container">
    <div className="hashtag">#draytonmanor</div>
    
    <div className="image-gallery">
        {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
        ))}
    </div>

    <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeIcon} alt="YouTube" />
        </a>
      </div>
    </div>
  );
}

export default SocialFollow
