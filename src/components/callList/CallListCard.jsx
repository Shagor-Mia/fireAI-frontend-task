import React from "react";
import { CircleCheckBig, Clock } from "lucide-react";
import call from "../../assets/Container1.png";

const CallListCard = ({
  phone,
  date,
  time,
  duration,
  status,
  statusColor,
  isActive,
  onClick,
  issue,
  outcome,
  className = "",
}) => {
  const defaultStatusStyles = {
    "AI Resolved":
      "bg-emerald-200/20 text-emerald-400 border border-emerald-400/40 backdrop-blur-md",
    "Warm Transfer":
      "bg-orange-200/20 text-orange-400 border border-orange-400/40 backdrop-blur-md",
    Appointment:
      "bg-blue-200/20 text-blue-400 border border-blue-400/40 backdrop-blur-md",
    Dropped:
      "bg-red-400/20 text-red-500 border border-red-400/40 backdrop-blur-md",
  };

  const finalStatusColor =
    statusColor || defaultStatusStyles[status] || "bg-slate-600 text-white";

  return (
    <div
      onClick={onClick}
      className={`
        group relative cursor-pointer
        border-b transition-all duration-200
        ${
          isActive
            ? "border-b-blue-500 border-b-2"
            : "border-b border-slate-700/60 hover:border-b-blue-500 hover:border-b-2"
        }
        ${className}
      `}
    >
      <div className="p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* LEFT */}
          <div className="flex gap-4 flex-1 min-w-0">
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex gap-2 md:gap-4">
                <img
                  src={call}
                  alt=""
                  className="shrink-0 h-12 w-12 md:h-14 md:w-14"
                />
                <div className="text-xs">
                  <span className="text-slate-100 text-base block truncate">
                    {phone}
                  </span>
                  <span className="text-sm text-slate-400">
                    {date} • {time}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm mt-2">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="h-3.5 w-3.5 opacity-80" />
                  {duration}
                </span>

                <span className="text-slate-300 flex items-center justify-center gap-1">
                  <CircleCheckBig className="h-3.5 w-3.5" />
                  {outcome}
                </span>

                {issue && (
                  <span className="px-2.5 py-0.5 bg-blue-300/30 text-blue-500 text-xs rounded-md">
                    {issue}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT - status */}
          <div className="mt-3 md:mt-0 flex-shrink-0 self-start md:self-center">
            <span
              className={`h-fit px-2.5 py-1 text-xs rounded-full ${finalStatusColor}`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallListCard;
