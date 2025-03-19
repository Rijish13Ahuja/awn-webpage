import styles from "../styles/topServices.module.css";

const TopServices = () => {
  return (
    <>
    <div className={styles.topServices}>
      <span className={styles.topServicesTitle}># AWN Top Services</span>
      {/* You can add additional content or a list of services here */}
    </div>
    <div className={styles.section}>
        {/* New Business Services Setup Services */}
        <div className={styles.serviceHeading}>New Business Services Setup Services</div>
        <div className={styles.serviceButtons}>
          <button className={styles.serviceButton}>VAT Registration <span className={styles.arrow}>→</span></button>
          <button className={styles.serviceButton}>GOSI Registration</button>
          <button className={styles.serviceButton}>MHRS Account activation</button>
          <button className={styles.serviceButton}>Address Registration</button>
        </div>
      </div>

      <div className={styles.section}>
        {/* Employee Compliance Services */}
        <div className={styles.serviceHeading}>Employee Compliance Services</div>
        <div className={styles.serviceButtons}>
          <button className={styles.serviceButton}>MHRS Account Services</button>
          <button className={styles.serviceButton}>GOSI Account Services</button>
          <button className={styles.serviceButton}>MUDAD Account Services</button>
          <button className={styles.serviceButton}>Health Insurance Services</button>
        </div>
      </div>

      <div className={styles.section}>
        {/* Business Compliance Services */}
        <div className={styles.serviceHeading}>Business Compliance Services</div>
        <div className={styles.serviceButtons}>
          <button className={styles.serviceButton}>Ministry Of Commerce</button>
          <button className={styles.serviceButton}>ZATCA</button>
          <button className={styles.serviceButton}>Civil Defence</button>
          <button className={styles.serviceButton}>Ministry Of Investment</button>
        </div>
      </div>

      <div className={styles.section}>
        {/* Business Compliance Services - another section */}
        <div className={styles.serviceHeading}>Business Compliance Services</div>
        <div className={styles.serviceButtons}>
          <button className={styles.serviceButton}>Employment contracts</button>
          <button className={styles.serviceButton}>Payroll Management</button>
          <button className={styles.serviceButton}>Leaves management</button>
          <button className={styles.serviceButton}>Letters and Certificates</button>
        </div>
      </div>

  </>
  
    
  );
};

export default TopServices;
