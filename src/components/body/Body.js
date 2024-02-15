import React from 'react';
import './body.css';
import Dinasour from '../../assets/images/Dinasour.jpg';
import ThomasTank from '../../assets/images/ThomasTank.jpg';

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
      image: "/images/zoo.jpg", // Replace with actual image path
      alt: "Zoo Animals"
    },
    {
      name: "SHORT BREAKS",
      image: "/images/short-breaks.jpg", // Replace with actual image path
      alt: "Family enjoying a short break"
    },
    {
      name: "ANNUAL PASS",
      image: "/images/annual-pass.jpg", // Replace with actual image path
      alt: "People holding an annual pass"
    },
    {
      name: "ADVENTURE GOLF",
      image: "/images/adventure-golf.jpg", // Replace with actual image path
      alt: "Mini Golf Course"
    },
    {
      name: "WATER PARK",
      image: "/images/water-park.jpg", // Replace with actual image path
      alt: "Water Slides"
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