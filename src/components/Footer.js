import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import styles from "../styles/footer.module.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Left Section - Logo & Description */}
        <div className={styles.footerLeft}>
          <img src="/assets/awn-logo.png" alt="AWN Logo" className={styles.logo} />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis dolor sit amet dolor pharetra, id vehicula nisl tincidunt.
          </p>
          <p className={styles.description}>
            Etiam at dui eget nulla bibendum vulputate. Donec suscipit augue sed erat mollis, ut tincidunt augue hendrerit.
          </p>
          
          {/* "FOLLOW US" Section */}
          <h3 className={styles.followUsText}>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
            <a href="#" className={styles.socialIcon}><FaXTwitter /></a>
            <a href="#" className={styles.socialIcon}><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right Section - Grid */}
        <div className={styles.footerLinks}>
          
          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h2 className={styles.linkTitle}>QUICKLINK</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Prices</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className={styles.linkSection}>
            <h2 className={styles.linkTitle}>OUR SERVICES</h2>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Business Setup Services</a></li>
              <li><a href="#">Employee Compliance Services</a></li>
              <li><a href="#">Business Compliance Services</a></li>
              <li><a href="#">HR Management Services</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className={styles.linkSection}>
            <h2 className={styles.linkTitle}>POLICIES</h2>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Pricing Policy</a></li>
              <li><a href="#">Payment Methods</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
