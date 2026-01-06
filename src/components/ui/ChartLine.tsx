import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

interface ChartLineProps {
  title: string;
  labels: string[];
  dataValues: number[];
}

const ChartLine: React.FC<ChartLineProps> = ({ title, labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: dataValues,
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.4)");
          gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
          gradient.addColorStop(1, "rgba(236, 72, 153, 0.05)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "rgba(59, 130, 246, 1)",
        pointBorderWidth: 3,
        pointHoverBackgroundColor: "rgba(59, 130, 246, 1)",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 3,
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   interaction: {
  //     mode: "index" as const,
  //     intersect: false,
  //   },
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
  //       displayColors: false,
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
  //       ticks: { 
  //         color: "#475569",
  //         font: {
  //           size: 12,
  //           weight: "500" as const,
  //         }
  //       },
  //       grid: {
  //         display: false,
  //       },
  //       border: {
  //         display: false,
  //       }
  //     },
  //     y: { 
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
  //       }
  //     },
  //   },
  // };

  // Calculate stats
  const max = Math.max(...dataValues);
  const min = Math.min(...dataValues);
  const avg = (dataValues.reduce((a, b) => a + b, 0) / dataValues.length).toFixed(0);

  return (
    <div className="relative group">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-violet-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          
          {/* Stats badges */}
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-xs text-blue-700 font-medium">Avg: {avg}</p>
            </div>
            <div className="px-3 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <p className="text-xs text-emerald-700 font-medium">Max: {max}</p>
            </div>
          </div>
        </div>
        
        {/* Chart container */}
        <div className="relative">
          <Line data={data}  />
        </div>

        {/* Mini stats at bottom */}
        <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-gray-200/50">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Minimum</p>
            <p className="text-lg font-bold text-rose-600">{min}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Average</p>
            <p className="text-lg font-bold text-blue-600">{avg}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Maximum</p>
            <p className="text-lg font-bold text-emerald-600">{max}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartLine;