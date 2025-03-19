import styles from "../styles/gigs.module.css";  // Import the CSS for the Gigs section

const Gigs = () => {
    return (
        <>
         <div className={styles.gigsSection}>
        <div className={styles.gigsHeading}>
          <span className={styles.gigsHashtag}># Gigs</span>
        </div>
        <h2 className={styles.gigsTitle}>Gigs You May Like</h2>
        
        <div className={styles.gigsContainer}>
          <div className={styles.gigCard}>
            <div className={styles.gigImage}></div>
            <div className={styles.gigContent}>
              <h3 className={styles.gigName}>Yasar Sahikh</h3>
              <p className={styles.gigDescription}>I will make your payroll for 50 employees in one day.</p>
              <div className={styles.gigRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.gigPrice}>From 120 SAR</p>
            </div>
          </div>
          
          <div className={styles.gigCard}>
            <div className={styles.gigImage}></div>
            <div className={styles.gigContent}>
              <h3 className={styles.gigName}>Elli Madison</h3>
              <p className={styles.gigDescription}>I will make your payroll for 50 new old employees in one day</p>
              <div className={styles.gigRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.gigPrice}>From 120 SAR</p>
            </div>
          </div>
          
          <div className={styles.gigCard}>
            <div className={styles.gigImage}></div>
            <div className={styles.gigContent}>
              <h3 className={styles.gigName}>Afreen</h3>
              <p className={styles.gigDescription}>Lorem ipsum dolor sit amet consectetur. Magna lectus ultrices.</p>
              <div className={styles.gigRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.gigPrice}>From 120 SAR</p>
            </div>
          </div>
          
          <div className={styles.gigCard}>
            <div className={styles.gigImage}></div>
            <div className={styles.gigContent}>
              <h3 className={styles.gigName}>Basit A</h3>
              <p className={styles.gigDescription}>Lorem ipsum dolor sit amet consectetur. Pulvinar sollicitudin.</p>
              <div className={styles.gigRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.gigPrice}>From 120 SAR</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };

export default Gigs;
