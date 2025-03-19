import styles from "../styles/Header.module.css";
import { FiSearch } from "react-icons/fi";
import { IoLanguageOutline, IoCartOutline, IoChatbubbleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
    <header className={styles.header}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search For Services..." className={styles.searchInput} />
        <button className={styles.searchButton}>
          <FiSearch />
        </button>
      </div>

      {/* Icons */}
      <div className={styles.iconsContainer}>
        <div className={styles.iconWrapper}>
          <IoLanguageOutline />
        </div>
        <div className={styles.iconWrapper}>
          <IoCartOutline />
        </div>
        <div className={styles.iconWrapper}>
          <IoChatbubbleOutline />
        </div>
      </div>

      {/* Orders Text */}
      <span className={styles.orders}>Orders</span>

      {/* Authentication Buttons */}
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.registerButton}>Register</button>
      </div>
    </header>

     {/* Service Navigation Bar */}
     <div className={styles.serviceNav}>
        <span className={styles.serviceLink}>Business Setup Services</span>
        <span className={styles.serviceLink}>Employee Compliance Services</span>
        <span className={styles.serviceLink}>Business Compliance Services</span>
        <span className={styles.serviceLink}>HR Management Services</span>
        <span className={styles.serviceLink}>GRO Services</span>
        <span className={styles.serviceLink}>PRO Services</span>
        <span className={styles.serviceLink}>Immigration</span>
      </div>
    </>
  );
};

export default Header;
