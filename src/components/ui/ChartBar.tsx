import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";



ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface ChartBarProps {
  title: string;
  labels: string[];
  dataValues: number[];
}

const ChartBar: React.FC<ChartBarProps> = ({ title, labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: dataValues,
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",   // blue
          "rgba(16, 185, 129, 0.8)",   // emerald
          "rgba(244, 63, 94, 0.8)",    // rose
          "rgba(245, 158, 11, 0.8)",   // amber
          "rgba(139, 92, 246, 0.8)",   // violet
          "rgba(236, 72, 153, 0.8)",   // pink
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(244, 63, 94, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(236, 72, 153, 1)",
        ],
        borderWidth: 2,
        borderRadius: 12,
        borderSkipped: false,
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   plugins: {
  //     legend: { 
  //       display: false 
  //     },
  //     tooltip: {
  //       backgroundColor: "rgba(255, 255, 255, 0.95)",
  //       titleColor: "#1e40af",
  //       bodyColor: "#374151",
  //       borderColor: "rgba(59, 130, 246, 0.2)",
  //       borderWidth: 1,
  //       padding: 12,
  //       displayColors: true,
  //       boxPadding: 6,
  //       usePointStyle: true,
  //       titleFont: {
  //         size: 14,
  //         weight: "bold" as const,
  //       },
  //       bodyFont: {
  //         size: 13,
  //       },
  //       callbacks: {
  //         label: function(context: any) {
  //           return ` ${context.parsed.y.toLocaleString()}`;
  //         }
  //       }
  //     },
  //   },
  //   scales: {
  //     x: { 
  //       type: 'category',
  //       ticks: { 
  //         color: "#475569",
  //         font: {
  //           size: 12,
  //           weight: "500" as const,
  //         }
  //       }, 
  //       grid: { 
  //         display: false 
  //       },
  //       border: {
  //         display: false,
  //       }
  //     },
  //     y: { 
  //       type: 'linear',
  //       ticks: { 
  //         color: "#475569",
  //         font: {
  //           size: 12,
  //         },
  //         padding: 8,
  //       },
  //       grid: {
  //         color: "rgba(148, 163, 184, 0.1)",
  //         drawBorder: false,
  //       },
  //       border: {
  //         display: false,
  //         dash: [5, 5],
  //       }
  //     },
  //   },
  // };

  return (
    <div className="relative group">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        
        {/* Chart container */}
        <div className="relative">
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartBar;