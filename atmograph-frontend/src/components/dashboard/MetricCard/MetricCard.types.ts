import type { ReactNode } from "react";

export interface MetricCardProps {
  title: string;
  value: string | number;
  percentage: string;
  trend: "up" | "down";
  icon: ReactNode;
  iconBg: string;
}