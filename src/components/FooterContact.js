import styles from "../styles/footerContact.module.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Importing React Icons

const FooterContact = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contactItem}>
        <FiPhone className={styles.icon} />
        <div>
          <p className={styles.contactTitle}>Call Us</p>
          <p className={styles.contactText}>+966-582940754</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <FiMail className={styles.icon} />
        <div>
          <p className={styles.contactTitle}>Mail Us</p>
          <p className={styles.contactText}>care@awn-business.com</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <FiMapPin className={styles.icon} />
        <div>
          <p className={styles.contactTitle}>Location</p>
          <p className={styles.contactText}>AlAred Dist, Riyadh - Saudi Arabia</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
