import styles from "./MetricCard.module.css";
import type { MetricCardProps } from "./MetricCard.types";
import { ArrowUp, ArrowDown } from "lucide-react";

const MetricCard = ({
  title,
  value,
  percentage,
  trend,
  icon,
  iconBg,
}: MetricCardProps) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.iconContainer}
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        <h2>{value}</h2>

        <div className={styles.footer}>
          <span className={trend === "up" ? styles.up : styles.down}>
            {trend === "up" ? (
              <ArrowUp size={14} />
            ) : (
              <ArrowDown size={14} />
            )}

            {percentage}
          </span>

          <span className={styles.compare}>
            vs last 30 days
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;