import "@xyflow/react/dist/style.css";
import CustomNode from "../CustomNode";

import {
  ReactFlow,
  Background,
  Controls,
} from "@xyflow/react";

import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";

import { useGraph } from "../../../context/GraphContext";
import { nodeData } from "../../../data/nodeData";

import styles from "./SupplyChainFlow.module.css";
const nodeTypes = {
  custom: CustomNode,
};

const SupplyChainFlow = () => {
  const { setSelectedNode } = useGraph();
  const handleNodeClick = (_: any, node: any) => {
  switch (node.id) {
    case "intel":
      setSelectedNode(nodeData.intel);
      break;

    case "tsmc":
      setSelectedNode(nodeData.tsmc);
      break;

    case "samsung":
      setSelectedNode(nodeData.samsung);
      break;

    case "foxconn":
      setSelectedNode(nodeData.foxconn);
      break;

    case "apple":
      setSelectedNode(nodeData.apple);
      break;

    case "shanghai":
      setSelectedNode(nodeData.shanghai);
      break;

    case "rotterdam":
      setSelectedNode(nodeData.rotterdam);
      break;

    case "la":
      setSelectedNode(nodeData.la);
      break;

    case "tata":
      setSelectedNode(nodeData.tata);
      break;

    default:
      break;
  }


};
  return (
    <div className={styles.flow}>
        
      <ReactFlow
  nodes={initialNodes}
  edges={initialEdges}
  nodeTypes={nodeTypes}
  fitView
  onNodeClick={handleNodeClick}
>
        <Background />
        <Controls />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  );
};

export default SupplyChainFlow;
