import React, { useState, useEffect } from 'react';
import './Header.css';

const slides = [
  "Try our specials of the day",
  "Delicious meals delivered fast",
  "Fresh ingredients, unforgettable taste"
];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>{slides[index]}</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients.</p>
        <button className="btn" onClick={() => document.getElementById('explore-menu')?.scrollIntoView({ behavior: 'smooth' })}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
