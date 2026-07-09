import styles from "./SupplyChainGraph.module.css";
import GraphLegend from "./GraphLegend";
import SupplyChainFlow from "../SupplyChainFlow";

import {
  RotateCcw,
  Download,
  Settings2,
  Activity,
} from "lucide-react";

const SupplyChainGraph = () => {
  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2>Global Supply Chain Network</h2>
          <p>Real-time visualization of supplier relationships</p>
        </div>

        <div className={styles.actions}>
          <div className={styles.live}>
            <Activity size={16} />
            <span>Live</span>
          </div>

          <button>
            <RotateCcw size={18} />
          </button>

          <button>
            <Settings2 size={18} />
          </button>

          <button>
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Graph Area */}
      <div className={styles.graphArea}>
  <SupplyChainFlow />
</div>

      {/* Legend */}
      <GraphLegend />
    </div>
  );
};

export default SupplyChainGraph;