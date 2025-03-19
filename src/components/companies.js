import styles from "../styles/companies.module.css";  // Import the CSS for the Companies section

const Companies = () => {
  return (
    <>
      <div className={styles.companiesSection}>
        <div className={styles.companiesHeading}>
          <span className={styles.companiesHashtag}># Companies</span>
        </div>
        <h2 className={styles.companiesTitle}>Top Companies That You Might Like</h2>
        
        <div className={styles.companiesContainer}>
          <div className={styles.companyCard}>
            <div className={styles.companyImage}></div>
            <div className={styles.companyContent}>
              <h3 className={styles.companyName}>Saudi Aramco</h3>
              <p className={styles.companyDescription}>We can verify your legal documents in one day</p>
              <div className={styles.companyRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.companyPrice}>From 120 SAR</p>
            </div>
          </div>
          
          <div className={styles.companyCard}>
            <div className={styles.companyImage}></div>
            <div className={styles.companyContent}>
              <h3 className={styles.companyName}>Saudi Aramco</h3>
              <p className={styles.companyDescription}>We can verify your legal documents in one day</p>
              <div className={styles.companyRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.companyPrice}>From 120 SAR</p>
            </div>
          </div>
          
          <div className={styles.companyCard}>
            <div className={styles.companyImage}></div>
            <div className={styles.companyContent}>
              <h3 className={styles.companyName}>Saudi Aramco</h3>
              <p className={styles.companyDescription}>We can verify your legal documents in one day</p>
              <div className={styles.companyRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.companyPrice}>From 120 SAR</p>
            </div>
          </div>
          
          <div className={styles.companyCard}>
            <div className={styles.companyImage}></div>
            <div className={styles.companyContent}>
              <h3 className={styles.companyName}>Saudi Aramco</h3>
              <p className={styles.companyDescription}>We can verify your legal documents in one day</p>
              <div className={styles.companyRating}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingText}>5.0 (1.1k reviews)</span>
              </div>
              <p className={styles.companyPrice}>From 120 SAR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;