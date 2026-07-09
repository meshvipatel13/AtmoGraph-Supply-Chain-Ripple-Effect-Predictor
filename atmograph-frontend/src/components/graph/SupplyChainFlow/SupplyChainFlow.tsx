import "@xyflow/react/dist/style.css";
import CustomNode from "../CustomNode";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";

import styles from "./SupplyChainFlow.module.css";
const nodeTypes = {
  custom: CustomNode,
};

const SupplyChainFlow = () => {
  return (
    <div className={styles.flow}>
        
      <ReactFlow
  nodes={initialNodes}
  edges={initialEdges}
  nodeTypes={nodeTypes}
  fitView
>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default SupplyChainFlow;