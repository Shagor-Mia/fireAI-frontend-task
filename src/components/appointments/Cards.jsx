// components/CompactStatCards.tsx
import React from "react";
import { Calendar, CircleCheckBig, CircleAlert } from "lucide-react";

const statsData = [
  {
    icon: Calendar,
    title: "Total Booked",
    value: 34,
    change: "+8 this week",
    color: "text-blue-400",
  },
  {
    icon: CircleCheckBig,
    title: "AI Booked",
    value: 28,
    change: "82% of total",
    color: "text-emerald-400",
  },
  {
    icon: CircleAlert,
    title: "Calls Today",
    value: 50,
    change: "+32 today",
    color: "text-yellow-400",
  },
];

export default function CompactStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {statsData.map((stat, i) => (
        <div
          key={i}
          className="
            bg-slate-900/80 backdrop-blur-sm
            border border-slate-800 rounded-xl
            p-5 hover:bg-slate-800/90 transition-colors
          "
        >
          <div className="flex items-center gap-3 mb-3">
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
            <span className=" text-slate-400">{stat.title}</span>
          </div>

          <div className="text-3xl  text-white mb-1">{stat.value}</div>

          <p
            className={`text-xs mt-2  ${
              i === 0 ? "text-emerald-400" : "text-slate-400"
            }`}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
