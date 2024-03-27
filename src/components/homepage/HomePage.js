import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./homepage.css";
import amusement from '../../assets/images/amusement.jpg';
import park3 from '../../assets/images/park3.jpg';
import park4 from '../../assets/images/park4.jpg';
import park5 from '../../assets/images/park5.jpg';
// import the pages here 
import SideBar from '../SideBar';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import LatestNews from '../body/LatestNews';
import Testimonials from '../body/FeedbackPage';
import SocialFollow from '../body/SocialFollow';

const body = () => {
  return (
    <div className='main-content'>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100 banner-image' src={amusement} alt='Amusement'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100 banner-image' src={park3} alt='Park-1'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100 banner-image' src={park4} alt='Park-2'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100 banner-image' src={park5} alt='Park-3'/>
      </Carousel.Item>
      </Carousel>
      
      <SideBar/>
      <Body />
      <Testimonials />
      <LatestNews />
      <SocialFollow />
      <Footer />
    </div>
  )
}

export default body
