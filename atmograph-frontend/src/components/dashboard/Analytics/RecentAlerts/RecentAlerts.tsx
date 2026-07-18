import { ArrowUpRight, TriangleAlert } from "lucide-react";
import styles from "./RecentAlerts.module.css";

const alerts = [
  { title: "High disruption risk", place: "Shanghai Port · China", risk: "92%", severity: "critical" },
  { title: "Weather-related delay", place: "Rotterdam · Netherlands", risk: "76%", severity: "high" },
  { title: "Production variance", place: "Foxconn · China", risk: "62%", severity: "medium" },
];

const RecentAlerts = () => (
  <section className={styles.card}>
    <div className={styles.heading}><h3>Recent Alerts</h3><button>Manage alerts</button></div>
    <div className={styles.alerts}>{alerts.map((alert) => <div className={styles.alert} key={alert.title}>
      <span className={`${styles.symbol} ${styles[alert.severity]}`}><TriangleAlert size={17}/></span>
      <div className={styles.copy}><strong>{alert.title}</strong><span>{alert.place}</span></div>
      <div className={styles.risk}><b className={styles[alert.severity]}>{alert.risk}</b><ArrowUpRight size={16}/></div>
    </div>)}</div>
  </section>
);

export default RecentAlerts;
