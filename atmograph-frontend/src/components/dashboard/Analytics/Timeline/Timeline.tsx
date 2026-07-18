import { CircleAlert, PackageCheck, Ship } from "lucide-react";
import styles from "./Timeline.module.css";

const events = [
  { time: "09:40", title: "Port congestion detected", text: "Shanghai Port capacity is at 86%.", icon: CircleAlert, level: "warning" },
  { time: "11:15", title: "Shipment departed", text: "Container SC-4492 left Rotterdam.", icon: Ship, level: "info" },
  { time: "13:30", title: "Supplier status updated", text: "Tata Electronics reported normal operations.", icon: PackageCheck, level: "success" },
];

const Timeline = () => (
  <section className={styles.card}>
    <div className={styles.heading}><h3>Network Timeline</h3><button>View all</button></div>
    <div className={styles.list}>
      {events.map(({ time, title, text, icon: Icon, level }) => (
        <div className={styles.event} key={title}>
          <time>{time}</time><span className={`${styles.icon} ${styles[level]}`}><Icon size={15} /></span>
          <div><strong>{title}</strong><p>{text}</p></div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;
