import styles from "./Sidebar.module.css";
import logo from "../../../assets/logos/atmograph-logo.png";

import {
  LayoutDashboard,
  Network,
  ChartColumn,
  BrainCircuit,
  Bell,
  Star,
  Clock3,
  FileText,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.logoSection}>
  <img
    src={logo}
    alt="AtmoGraph Logo"
    className={styles.logo}
  />

  <div>
    <h2>AtmoGraph</h2>
    <p>Supply Chain Ripple Effect Predictor</p>
  </div>
</div>

      <nav>

        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
          active
        />

        <SidebarItem
          icon={<Network size={20} />}
          title="Graph View"
        />

        <SidebarItem
          icon={<ChartColumn size={20} />}
          title="Analytics"
        />

        <SidebarItem
          icon={<BrainCircuit size={20} />}
          title="Predictions"
        />

        <SidebarItem
          icon={<Bell size={20} />}
          title="News & Alerts"
          badge={5}
        />

        <SidebarItem
          icon={<Star size={20} />}
          title="Watchlist"
        />

        <SidebarItem
          icon={<Clock3 size={20} />}
          title="Timeline"
        />

        <SidebarItem
          icon={<FileText size={20} />}
          title="Reports"
        />

        <SidebarItem
          icon={<Settings size={20} />}
          title="Settings"
        />

      </nav>

      <div className={styles.riskCard}>
        <h3>Overall Risk Score</h3>

        <div className={styles.score}>
          72
        </div>

        <span>/100</span>

        <p className={styles.highRisk}>
          High Risk
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;