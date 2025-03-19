import styles from "../styles/heroSection.module.css";
// import heroImg from "../../public/assets/HeroImg.png"; 

const HeroSection = () => {
  return (
    <>
    <div className={styles.heroSection}>
      <img src="/assets/HeroImg.png" alt="Hero" className={styles.heroImage} />
    </div>
    <div className={styles.stats}>
        <h2 className={styles.number}>15+</h2>
        <p className={styles.description}>Saudi Government Platforms</p>
      </div>
      <div className={styles.serviceInfo}>
        <span className={styles.serviceTitle}>AWN Corporate Services</span>
        <p className={styles.serviceDescription}>
        We provide comprehensive professional services to manage your business with compliance and smoothen your operations hassle free. Support of AWN expertise is highly recommended to allocate your valuable time focusing on business growth.
        </p>
      </div>
      <div className={styles.serviceBoxes}>
        <div className={styles.serviceBox}>
          <div className={styles.icon}>🛠</div>
          <h3 className={styles.boxTitle}>New Business Services Setup</h3>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.icon}>📦</div>
          <h3 className={styles.boxTitle}>Employee Compliance Services</h3>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.icon}>💻</div>
          <h3 className={styles.boxTitle}>Business Compliance Services</h3>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.icon}>📝</div>
          <h3 className={styles.boxTitle}>HR Management Services</h3>
        </div>
        </div>

         {/* Chat Button (floating on the right) */}
      <div className={styles.chatBox}>
        <img src="/assets/chatBox.png" alt="Chat" className={styles.chatIcon} />
      </div>
    </>
  );
};

export default HeroSection;
