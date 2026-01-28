import React, { Activity } from "react";
import Activities from "./Activities";
const AllActivity = () => {
  const activity = [
    {
      id: 1,
      title: "AI booked appointment for iPhone 13 screen repair",
      value: "2 min ago",
      color: "#10b981",
    },
    {
      id: 2,
      title: "Warm transfer to technician - Software issue",
      value: "5 min ago",
      color: "#facc15",
    },
    {
      id: 3,
      title: "Quote provided for iPad battery replacement",
      value: "8 min ago",
      color: "#10b981",
    },
    {
      id: 4,
      title: "Call dropped after 12 seconds",
      value: "15 min ago",
      color: "#ef4444",
    },
  ];

  return (
    <div className="grid grid-cols-1 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 md:gap-6 gap-2 h-full">
      <h1 className="md:text-2xl pt-3">Recent Activity</h1>
      {activity.map((card) => (
        <Activities key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllActivity;
