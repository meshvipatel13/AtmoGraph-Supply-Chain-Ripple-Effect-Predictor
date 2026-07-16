import styles from "./AnalyticsGrid.module.css";

import RiskDistribution from "../RiskDistribution";
import TopRiskCountries from "../TopRiskCountries";

const AnalyticsGrid = () => {
  return (
    <div className={styles.grid}>
      <RiskDistribution />

      <TopRiskCountries />

      <div className={styles.placeholder}>
        Timeline
      </div>

      <div className={styles.placeholder}>
        Recent Alerts
      </div>
    </div>
  );
};

export default AnalyticsGrid;