import React from 'react';
import styles from '../styles/Hero.module.css';
import heroBg from '../assets/images/hero-bg.jpg'; // Import the image

const Hero = () => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }} // Inline background image
    >
      <div className={styles.hero}>
        <h1>Welcome to Stonepedia</h1>
        <p>Explore the finest stones for your needs</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
