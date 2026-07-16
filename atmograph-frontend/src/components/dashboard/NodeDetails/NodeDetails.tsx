import styles from "./NodeDetails.module.css";
import { useGraph } from "../../../context/GraphContext";

const NodeDetails = () => {
  const { selectedNode } = useGraph();

  return (
    <div className={styles.card}>
      <h2>Node Details</h2>

      <div className={styles.section}>
        <span>Company</span>
        <strong>{selectedNode.company}</strong>
      </div>

      <div className={styles.section}>
        <span>Country</span>
        <strong>{selectedNode.country}</strong>
      </div>

      <div className={styles.section}>
        <span>Risk Level</span>
        <strong className={styles[selectedNode.risk.toLowerCase()]}>
          {selectedNode.risk}
        </strong>
      </div>

      <div className={styles.section}>
        <span>Risk Score</span>
        <strong>{selectedNode.score}%</strong>
      </div>

      <div className={styles.section}>
        <span>Connected Nodes</span>
        <strong>{selectedNode.connectedNodes}</strong>
      </div>

      <div className={styles.section}>
        <span>Predicted Delay</span>
        <strong>{selectedNode.delay}</strong>
      </div>

      <div className={styles.section}>
        <span>Model Confidence</span>
        <strong>{selectedNode.confidence}%</strong>
      </div>
    </div>
  );
};

export default NodeDetails;