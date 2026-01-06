import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  color?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, color = "blue" }) => {
  const colorMap: Record<string, string> = {
    blue: "border-blue-500 text-blue-900",
    emerald: "border-emerald-400 text-emerald-600",
    rose: "border-rose-400 text-rose-600",
    amber: "border-amber-400 text-amber-600",
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-t-4 ${colorMap[color]}`}>
      <h2 className="text-gray-700 font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;
