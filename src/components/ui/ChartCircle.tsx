import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartCircleProps {
  title: string;
  labels: string[];
  dataValues: number[];
}

const ChartCircle: React.FC<ChartCircleProps> = ({ title, labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ["#3b82f6", "#10b981", "#f43f5e", "#f59e0b"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" as const },
      tooltip: {
        backgroundColor: "#f9fafb",
        titleColor: "#1e3a8a",
        bodyColor: "#374151",
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-blue-900 font-bold mb-2">{title}</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartCircle;
