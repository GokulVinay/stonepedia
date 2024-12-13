import React from "react";
import styles from "../styles/Featured.module.css";
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';

const Featured = () => {
  return (
    <section id="featured" className={styles.featured}>
      <h2>Featured Products</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={product1} alt="Product 1" />
          <h3>Product 1</h3>
        </div>
        <div className={styles.card}>
          <img src={product2} alt="Product 2" />
          <h3>Product 2</h3>
        </div>
      </div>
    </section>
  );
};

export default Featured;
