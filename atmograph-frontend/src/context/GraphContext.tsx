import { createContext, useContext, useState } from "react";

type NodeData = {
  company: string;
  country: string;
  risk: string;
  score: number;
  connectedNodes: number;
  delay: string;
  confidence: number;
};

type GraphContextType = {
  selectedNode: NodeData;
  setSelectedNode: React.Dispatch<React.SetStateAction<NodeData>>;
};

const defaultNode: NodeData = {
  company: "Foxconn",
  country: "China",
  risk: "Medium",
  score: 62,
  connectedNodes: 5,
  delay: "15-30 Days",
  confidence: 71,
};

const GraphContext = createContext<GraphContextType | undefined>(undefined);

export const GraphProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedNode, setSelectedNode] = useState(defaultNode);

  return (
    <GraphContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export const useGraph = () => {
  const context = useContext(GraphContext);

  if (!context) {
    throw new Error("useGraph must be used inside GraphProvider");
  }

  return context;
};