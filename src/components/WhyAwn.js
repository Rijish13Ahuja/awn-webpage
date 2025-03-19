import styles from "../styles/whyAwn.module.css"; // Import CSS

const WhyAwn = () => {
  return (
    <div className={styles.whyAwnWrapper}>
      <div className={styles.whyAwnContainer}>
        {/* Left Section (Grey Background) */}
        <div className={styles.greySection}></div>

        {/* Right Section (Content) */}
        <div className={styles.contentSection}>
          <span className={styles.whyAwnHashtag}># Why AWN?</span>
          <h2 className={styles.whyAwnTitle}>
            Unlock your success with AWN: <br />
            Simplify your business Journey
          </h2>

          <div className={styles.whyAwnFeatures}>
            <div className={styles.feature}>
              <span className={styles.icon}>📄</span>
              <p>Access to all the major government services in one place</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🔹</span>
              <p>Easy to use and easy experience for all users</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>⚡</span>
              <p>Get all your work done for your business in no time</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>💰</span>
              <p>Only Pay once your work gets completed.</p>
            </div>
          </div>

          <button className={styles.registerBtn}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default WhyAwn;
