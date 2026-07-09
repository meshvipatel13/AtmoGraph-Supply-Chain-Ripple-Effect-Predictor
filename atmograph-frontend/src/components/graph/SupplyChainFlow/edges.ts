import type { Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
  {
    id: "1",
    source: "intel",
    target: "foxconn",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#22C55E", strokeWidth: 3 },
  },

  {
    id: "2",
    source: "tsmc",
    target: "foxconn",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#22C55E", strokeWidth: 3 },
  },

  {
    id: "3",
    source: "samsung",
    target: "foxconn",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#22C55E", strokeWidth: 3 },
  },

  {
    id: "4",
    source: "foxconn",
    target: "apple",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#F59E0B", strokeWidth: 3 },
  },

  {
    id: "5",
    source: "foxconn",
    target: "shanghai",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#EF4444", strokeWidth: 3 },
  },

  {
    id: "6",
    source: "shanghai",
    target: "rotterdam",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#EF4444", strokeWidth: 3 },
  },

  {
    id: "7",
    source: "rotterdam",
    target: "la",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#EF4444", strokeWidth: 3 },
  },

  {
    id: "8",
    source: "la",
    target: "tata",
    type:"smoothstep",
    animated: true,
    style: { stroke: "#22C55E", strokeWidth: 3 },
  },
];