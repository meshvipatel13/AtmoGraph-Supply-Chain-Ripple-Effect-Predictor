import type { Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "intel",
    type: "custom",
    position: { x: 80, y: 120 },
    data: {
      label: "Intel",
      type: "USA",
      color: "#22C55E",
    },
  },

  {
    id: "tsmc",
    type: "custom",
    position: { x: 80, y: 320 },
    data: {
      label: "TSMC",
      type: "Taiwan",
      color: "#22C55E",
    },
  },

  {
    id: "samsung",
    type: "custom",
    position: { x: 120, y: 520 },
    data: {
      label: "Samsung",
      type: "South Korea",
      color: "#22C55E",
    },
  },

  {
    id: "foxconn",
    type: "custom",
    position: { x: 500, y: 300 },
    data: {
      label: "Foxconn",
      type: "China",
      color: "#F59E0B",
    },
  },

  {
    id: "apple",
    type: "custom",
    position: { x: 700, y: 550 },
    data: {
      label: "Apple",
      type: "USA",
      color: "#F59E0B",
    },
  },

  {
    id: "shanghai",
    type: "custom",
    position: { x: 700, y: 40 },
    data: {
      label: "Shanghai Port",
      type: "China",
      color: "#EF4444",
    },
  },

  {
    id: "rotterdam",
    type: "custom",
    position: { x: 1100, y: 140 },
    data: {
      label: "Rotterdam",
      type: "Netherlands",
      color: "#EF4444",
    },
  },

  {
    id: "la",
    type: "custom",
    position: { x: 1100, y: 400 },
    data: {
      label: "Los Angeles",
      type: "USA",
      color: "#EF4444",
    },
  },

  {
    id: "tata",
    type: "custom",
    position: { x: 980, y: 620 },
    data: {
      label: "Tata Electronics",
      type: "India",
      color: "#22C55E",
    },
  },
];