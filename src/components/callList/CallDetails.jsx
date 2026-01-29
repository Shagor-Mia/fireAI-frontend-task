import React from "react";
import { CirclePlay, FileText } from "lucide-react";
import { Filter1, IssueFilter, TypeFilter } from "../Filter";

const callDetails = {
  phoneNumber: "+1 (555) 123-4567",
  duration: "4:32",
  dateTime: "2025-12-16 10:45 AM",
  issueType: "Screen",
  callType: "AI Resolved",
  outcome: "Quote provided",
  quoteDetails:
    "For an iPhone 13 screen repair, our price $199. This includes parts, labor, and comes with a 90-day warranty.",
  transcript: [
    {
      speaker: "AI Assistant",
      text: "Thank you for calling uBreakiFix. How can I help you today?",
      color: "text-blue-300",
    },
    {
      speaker: "Customer",
      text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
      color: "text-emerald-300",
    },
    {
      speaker: "AI Assistant",
      text: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
      color: "text-blue-300",
    },
    {
      speaker: "Customer",
      text: "Yes, please! When are you available?",
      color: "text-emerald-300",
    },
    {
      speaker: "AI Assistant",
      text: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
      color: "text-blue-300",
    },
  ],
};

const CallDetails = () => {
  return (
    <div className="px-2 md:px-0">
      {/* Filters */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3 my-5">
        <TypeFilter />
        <IssueFilter />
        <Filter1 />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-800/60 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-700/70">
            <h1 className="text-2xl tracking-tight flex items-center gap-3">
              Call Details
            </h1>
          </div>

          {/* Info Rows */}
          <div className="flex flex-col md:flex-row md:gap-10 px-4 md:px-6 py-4">
            <div className="flex-1 space-y-6">
              <InfoRow label="Phone Number" value={callDetails.phoneNumber} />
              <InfoRow label="Date & Time" value={callDetails.dateTime} />
              <div>
                <label className="text-sm text-slate-400 block mb-1.5">
                  Call Type
                </label>
                <div className="inline-flex px-4 py-1.5 bg-emerald-900/40 text-emerald-300 font-medium rounded-lg border border-emerald-800/40">
                  {callDetails.callType}
                </div>
              </div>
            </div>

            <div className="flex-1 mt-6 md:mt-0">
              <InfoRow label="Duration" value={callDetails.duration} />
              <InfoRow label="Issue Type" value={callDetails.issueType} />
            </div>
          </div>

          {/* Outcome & Audio */}
          <div className="px-4 md:px-6">
            <div className="mt-5">
              <label className="text-sm text-slate-400 block">Outcome</label>
              <p className="text-slate-200">{callDetails.outcome}</p>
            </div>

            <button className="w-full mt-4 bg-purple-400/30 hover:from-violet-600 hover:to-purple-600 text-purple-500 transition-all px-6 py-3 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-violet-900/30 border border-purple-500/30 hover:text-white">
              <CirclePlay />
              Play Audio Recording
            </button>
          </div>

          {/* Transcript Section */}
          <div className="mt-5">
            <div className="px-6 py-5 flex items-center gap-3 border-b border-slate-800/60">
              <FileText className="text-blue-500" />
              <h2 className="text-lg font-semibold">Conversation Transcript</h2>
            </div>

            <div className="p-4 md:p-6 space-y-6 bg-gray-800 mx-2 md:mx-5 mb-5 rounded-2xl">
              {callDetails.transcript.map((entry, index) => (
                <div key={index} className="space-y-1">
                  <p
                    className={`font-medium ${
                      entry.speaker.includes("AI")
                        ? "text-blue-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {entry.speaker}:
                  </p>

                  <p className="text-slate-200 text-xs leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Info Row Component
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 py-1">
      <div className="text-slate-400 flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <div className="text-sm text-slate-400">{label}</div>
        <div className="text-slate-100 mt-0.5">{value}</div>
      </div>
    </div>
  );
}

export default CallDetails;
