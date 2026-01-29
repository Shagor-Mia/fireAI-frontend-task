import { Phone } from "lucide-react";
import CallListCard from "./CallListCard";
import { useState } from "react";
import SearchInput from "../Search";

const callList = [
  {
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    issue: "Screen",
    outcome: "Quote Provided",
  },
  {
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Warm Transfer",
    issue: "Software",
    outcome: "Escalated to technician",
  },
  {
    phone: "+1 (555) 535-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    issue: "Battery",
    outcome: "Appointment Booked",
  },
  {
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Dropped",
    issue: "Unknown",
    outcome: "Call Dropped",
  },
  {
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    issue: "Screen",
    outcome: "Quote Provided",
  },
];

const CallList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="px-2 md:0">
      {/* Search */}
      <SearchInput />

      {/* Card Container */}
      <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-800/60 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-4 md:px-6 py-5 border-b border-slate-700/70 flex items-center gap-3">
          <h2 className="text-2xl text-white tracking-tight">Call List</h2>
        </div>

        {/* Cards */}
        <div className="py-4 space-y-4">
          {callList.map((call, index) => (
            <CallListCard
              key={index}
              {...call}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallList;
