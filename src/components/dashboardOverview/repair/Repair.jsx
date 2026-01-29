// TopRepairRequests.jsx
import React from "react";

const repairData = [
  { id: 1, type: "Screen Repair", count: 156 },
  { id: 2, type: "Battery Replacement", count: 89 },
  { id: 3, type: "Back Glass Repair", count: 67 },
  { id: 4, type: "Software Issues", count: 45 },
];

const maxCount = Math.max(...repairData.map((item) => item.count));

const RepairCard = ({ item }) => {
  const percentage = ((item.count / maxCount) * 100).toFixed(0);

  return (
    <div className="flex flex-col  bg-gray-50 dark:bg-gray-900 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <span className="text-gray-900 dark:text-gray-100">{item.type}</span>
        <span className="text-gray-700 dark:text-gray-300">
          {item.count} requests
        </span>
      </div>

      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full ">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && (
            <span className="text-xs text-white/90 drop-shadow-sm">
              {/* {percentage}% */}
            </span>
          )}
        </div>

        {percentage <= 15 && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 dark:text-gray-300">
            {percentage}%
          </span>
        )}
      </div>
    </div>
  );
};

const Repair = () => {
  return (
    <div className="grid grid-cols-1  dark:bg-gray-900 rounded-xl  md:rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl px-6 h-full w-full">
      <h2 className="md:text-2xl pt-10 text-gray-900 dark:text-gray-100">
        Top Repair Requests
      </h2>

      {repairData.map((item) => (
        <RepairCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Repair;
