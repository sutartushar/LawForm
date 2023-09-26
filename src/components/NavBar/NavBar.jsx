import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <div className={styles.NavText}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <Button />
    </nav>
  );
};

export default NavBar;
