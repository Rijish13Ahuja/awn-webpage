import styles from "../styles/networkDiagram.module.css";

const NetworkDiagram = () => {
  return (
    <div className={styles.networkContainer}>
    <svg viewBox="0 0 1200 600" className={styles.networkSvg}> {/* Increased width */}

      {/* Center Circle with Logo */}
      <circle cx="600" cy="300" r="75" className={styles.outerCircle} />
      <circle cx="600" cy="300" r="65" className={styles.innerCircle} />
      <image href="/assets/awn-logo.png" x="560" y="265" height="80px" width="80px" />

      {/* Left Side Lines & Containers */}
      {[...Array(6)].map((_, i) => {
        const y = 100 + i * 70; // Keep same vertical spacing
        return (
          <g key={`left-${i}`}>
            {/* First segment (Starting further out) */}
            <line x1="500" y1="300" x2="350" y2={y} className={styles.line} />
            {/* Second segment extending further left */}
            <line x1="350" y1={y} x2="200" y2={y} className={styles.line} />
            {/* Dot at branching point */}
            <circle cx="350" cy={y} r="4" className={styles.dot} />
            {/* End Container (More to the left) */}
            <rect x="150" y={y - 10} width="40" height="20" rx="5" className={styles.container} />
          </g>
        );
      })}

      {/* Right Side Lines & Containers */}
      {[...Array(6)].map((_, i) => {
        const y = 100 + i * 70;
        return (
          <g key={`right-${i}`}>
            {/* First segment (Starting further out) */}
            <line x1="700" y1="300" x2="850" y2={y} className={styles.line} />
            {/* Second segment extending further right */}
            <line x1="850" y1={y} x2="1000" y2={y} className={styles.line} />
            {/* Dot at branching point */}
            <circle cx="850" cy={y} r="4" className={styles.dot} />
            {/* End Container (More to the right) */}
            <rect x="1000" y={y - 10} width="40" height="20" rx="5" className={styles.container} />
          </g>
        );
      })}
    </svg>
    </div>
  );
};

export default NetworkDiagram;
