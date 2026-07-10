import DashboardLayout from "../../components/layout/DashboardLayout";
import MetricCard from "../../components/dashboard/MetricCard";
import DashboardBody from "../../components/dashboard/DashboardBody";
import AnalyticsGrid from "../../components/dashboard/Analytics/AnalyticsGrid";

import {
  Users,
  Factory,
  TriangleAlert,
  Clock3,
} from "lucide-react";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
  <DashboardLayout>

    <div className={styles.metricsGrid}>
      <MetricCard
        title="Total Suppliers"
        value="1,246"
        percentage="12.5%"
        trend="up"
        icon={<Users size={28} />}
        iconBg="#5B3DF5"
      />

      <MetricCard
        title="Manufacturers"
        value="843"
        percentage="8.3%"
        trend="up"
        icon={<Factory size={28} />}
        iconBg="#06B6D4"
      />

      <MetricCard
        title="High Risk Nodes"
        value="128"
        percentage="18.7%"
        trend="down"
        icon={<TriangleAlert size={28} />}
        iconBg="#DC2626"
      />

      <MetricCard
        title="Predicted Delays"
        value="23"
        percentage="5.2%"
        trend="up"
        icon={<Clock3 size={28} />}
        iconBg="#16A34A"
      />
    </div>

    <DashboardBody />

    <AnalyticsGrid />

  </DashboardLayout>
);
};

export default Dashboard;