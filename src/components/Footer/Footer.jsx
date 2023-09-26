import React from "react";
import styles from "./Footer.module.css";
import Social from "../../assets/Social.svg";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <div className={styles.FooterWrapper}>
      <Logo />
      <div className={styles.ContentWrapper}>
        <div className={styles.Menu}>
          <img src={Social} alt="SocialImg" />
        </div>

        <div className={styles.PrivacyDetails}>
          <p>© 2023 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
