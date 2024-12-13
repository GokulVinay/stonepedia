import React from "react";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonial}>
        <p>"Amazing quality stones! Highly recommend Stonepedia."</p>
        <span>- Customer A</span>
      </div>
    </section>
  );
};

export default Testimonials;
