// CallTrendsChart.jsx
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const thisWeekData = [
  { day: "Mon", calls: 45 },
  { day: "Tue", calls: 68 },
  { day: "Wed", calls: 78 },
  { day: "Thu", calls: 92 },
  { day: "Fri", calls: 110 },
  { day: "Sat", calls: 125 },
  { day: "Sun", calls: 54 },
];

const lastWeekData = [
  { day: "Mon", calls: 38 },
  { day: "Tue", calls: 55 },
  { day: "Wed", calls: 82 },
  { day: "Thu", calls: 105 },
  { day: "Fri", calls: 98 },
  { day: "Sat", calls: 72 },
  { day: "Sun", calls: 61 },
];

const periods = {
  "This Week": thisWeekData,
  "Last Week": lastWeekData,
};

export default function CallTrendsChart() {
  const [timeRange, setTimeRange] = useState("This Week");
  const [isOpen, setIsOpen] = useState(false);

  const currentData = periods[timeRange];
  const totalCalls = currentData.reduce((sum, d) => sum + d.calls, 0);

  const options = ["This Week", "Last Week"];

  return (
    <div className="w-full max-w-full sm:max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
            Call Trends
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Total: {totalCalls} calls
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full sm:w-auto gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {timeRange}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-full sm:w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-10">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setTimeRange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm ${
                    option === timeRange
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  } transition-colors`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e2e8f0"
              className="dark:stroke-slate-700"
            />

            <XAxis
              dataKey="day"
              axisLine={{ stroke: "#64748b" }}
              tickLine={{ stroke: "#64748b" }}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              dy={10}
            />

            <YAxis
              axisLine={{ stroke: "#64748b" }}
              tickLine={{ stroke: "#64748b" }}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              tickFormatter={(v) => v.toFixed(0)}
              width={30}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15,23,42,0.95)",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#e2e8f0",
              }}
              formatter={(val) => [`${val} calls`, ""]}
            />

            <Area
              type="monotoneX"
              dataKey="calls"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#colorCalls)"
              dot={false}
              activeDot={{
                r: 6,
                stroke: "#3b82f6",
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  color = "text-gray-900 dark:text-gray-100",
}) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {label}
      </p>
      <p className={`text-xl font-semibold mt-1 ${color}`}>{value}</p>
    </div>
  );
}
