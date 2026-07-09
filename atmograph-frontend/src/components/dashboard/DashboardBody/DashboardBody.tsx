import styles from "./DashboardBody.module.css";

import SupplyChainGraph from "../../graph/SupplyChainGraph";
import NodeDetails from "../../graph/NodeDetails";

const DashboardBody = () => {
  return (
    <section className={styles.container}>

      <div className={styles.left}>
        <SupplyChainGraph />
      </div>

      <div className={styles.right}>
        <NodeDetails />
      </div>

    </section>
  );
};

export default DashboardBody;