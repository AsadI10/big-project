import React from 'react'
import { useState } from 'react';
import './FeedbackPage.css';

const testimonials = [
    {
        quote: "Great Halloween experience",
        author: "Went with my 11 year old granddaughter for Halloween. Had a great day, and night! No massive queues for rides, the park was decorated across all...",
        rating: 5,
      },
      {
        quote: "Great day out for the family",
        author: "Amazing second visit to Drayton Manor and even better that the return visit was free! We went on a hot Saturday the first time and on a cooler Monday the...",
        rating: 4,
      },
      {
        quote: "Great day out",
        author: "Small queues, managed to get on rides 2 to 3 times and visit the zoo, which we normally can't fit in during a summer visit. Kids loved it. Can't fault...",
        rating: 5,
      },
];

const FeedbackPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
};

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
};

  return (
    <div className="testimonials-container">
      <h2>What Our Visitors Think</h2>
      <div className="testimonials-content">
        <button onClick={prevTestimonial}>&lt;</button>
        <div className="testimonial">
          <p className="quote">{testimonials[activeIndex].quote}</p>
          <p className="author">{testimonials[activeIndex].author}</p>
          {/* You can dynamically generate rating stars based on testimonials[activeIndex].rating */}
        </div>
        <button onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  )
}

export default FeedbackPage
