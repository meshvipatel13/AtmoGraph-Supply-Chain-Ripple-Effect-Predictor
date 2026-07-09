import { Handle, Position } from "@xyflow/react";
import styles from "./CustomNode.module.css";

interface Props {
  data: {
    label: string;
    type: string;
    color: string;
  };
}

const CustomNode = ({ data }: Props) => {
  return (
    <>
      <Handle type="target" position={Position.Left} />

      <div className={styles.container}>
        <div
          className={styles.circle}
          style={{ background: data.color }}
        />

        <div className={styles.label}>
          <strong>{data.label}</strong>
          <span>{data.type}</span>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default CustomNode;