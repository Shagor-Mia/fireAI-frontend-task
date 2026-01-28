import React from "react";

const Activities = ({ card }) => {
  return (
    <div className="flex items-start  gap-4 p-4 dark:bg-gray-800  border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Color indicator */}
      <div
        className="w-2 h-2 rounded-full mt-3"
        style={{ backgroundColor: card.color }}
      ></div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-gray-900 dark:text-gray-200 ">{card.title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {card.value}
        </p>
      </div>
    </div>
  );
};

export default Activities;
