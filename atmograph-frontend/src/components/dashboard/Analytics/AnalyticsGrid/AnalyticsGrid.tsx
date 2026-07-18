import styles from "./AnalyticsGrid.module.css";

import RiskDistribution from "../RiskDistribution";
import TopRiskCountries from "../TopRiskCountries";
import Timeline from "../Timeline/Timeline";
import RecentAlerts from "../RecentAlerts/RecentAlerts";

const AnalyticsGrid = () => {
  return (
    <div className={styles.grid}>
      <RiskDistribution />

      <TopRiskCountries />

      <Timeline />
      <RecentAlerts />
    </div>
  );
};

export default AnalyticsGrid;
