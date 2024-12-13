import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Stonepedia</div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#featured">Featured</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
