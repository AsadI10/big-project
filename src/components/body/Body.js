import React from 'react';
import './body.css';
import Dinasour from '../../assets/images/Dinasour.jpg';
import ThomasTank from '../../assets/images/ThomasTank.jpg';
import Zoo from '../../assets/images/zoo.jpg';
import ShortStay from '../../assets/images/ShortStay.jpg';
import AnnualPass from '../../assets/images/AnnualPass.jpg';
import MiniGolf from '../../assets/images/MiniGolf.jpg';

const attractions = [
    {
      name: "DINOSAUR BREAKOUT",
      image: Dinasour,
      alt: "Dinosaurs"
    },
    {
      name: "THOMAS LAND",
      image: ThomasTank,
      alt: "Thomas the Tank Engine"
    },
    {
      name: "ZOO ONLY DAYS",
      image: Zoo,
      alt: "Zoo Animals"
    },
    {
      name: "SHORT BREAKS",
      image: ShortStay,
      alt: "Family enjoying a short break"
    },
    {
      name: "ANNUAL PASS",
      image: AnnualPass,
      alt: "People holding an annual pass"
    },
    {
      name: "ADVENTURE GOLF",
      image: MiniGolf,
      alt: "Mini Golf Course"
    },
];
  
const Body = () => {
    return (
      <div className="body-container">
        <h2>Fun For Everyone</h2>
        <p>Explore over 50 exciting rides and attractions at Vista Voyage Resort. With exciting new lands to discover, Europe's only Thomas Land and a 15-acre zoo, there’s fun for everyone!</p>
        <div className="attractions-container">
        {attractions.map((attraction, index) => (
          <div className="attraction-card" key={index}>
            <img src={attraction.image} alt={attraction.alt} />
            <button>{attraction.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;