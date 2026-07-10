import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./RiskDistribution.module.css";
import { riskData } from "../../../../data/riskDistribution";

const COLORS = [
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

const RiskDistribution = () => {
  return (
    <div className={styles.card}>
      <h3>Risk Distribution</h3>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={riskData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
            >
              {riskData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        {riskData.map((item, index) => (
          <div className={styles.legendItem} key={item.name}>
            <div
              className={styles.color}
              style={{ background: COLORS[index] }}
            />

            <span>{item.name}</span>

            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskDistribution;