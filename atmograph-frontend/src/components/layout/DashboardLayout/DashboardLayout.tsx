import styles from "./DashboardLayout.module.css";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.rightSection}>
        <Navbar />

        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;