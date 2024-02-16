import React from 'react';
import './Latestnews.css';

import TrainNews from '../../assets/images/TrainNews.jpg';
import DinasourNews from '../../assets/images/DinasourNews.jpg';
import EasterHolidays from '../../assets/images/EasterHolidays.jpg';

const newsItems = [
    {
        title: "Get ready for the biggest year in Vista Voyage History",
        image: TrainNews,
        date: "12/02/2024",
        linkText: "READ MORE"
    },
    {
        title: "Dinasours are on the loose at Vista Voyage Resort this February Half Term!",
        image: DinasourNews,
        date: '23/01/2024',
        linkText:'READ MORE'
    },
    {
        title: "Incredible offers this Easter",
        image: EasterHolidays,
        date: '16/02/2024',
        linkText: 'READ MORE'
    }
]

const LatestNews = () => {
  return (
    <div className="latest-news-container">
    <h2>Latest News</h2>
    <div className="news-items">
      {newsItems.map((item, index) => (
        <div className="news-item" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="news-info">
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <button>{item.linkText}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default LatestNews
