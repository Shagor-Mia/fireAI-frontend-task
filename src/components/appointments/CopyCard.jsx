import { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyCard = ({ bookingLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-b my-6 sm:my-10 from-black via-slate-950 to-slate-900 rounded-2xl border border-slate-800 shadow-2xl py-4 overflow-hidden">
      {/* Title */}
      <div className="px-4 sm:px-6 py-2">
        <h3 className="text-xl sm:text-2xl text-slate-300">Booking Link</h3>
      </div>

      {/* Input + Copy Button */}
      <div className="px-4 sm:px-6 pb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Input Field */}
          <input
            type="text"
            value={bookingLink}
            readOnly
            className="
              w-full
              px-4 sm:px-5 py-3 sm:py-4
              bg-black/40
              border border-slate-700
              rounded-xl
              text-xs sm:text-sm
              tracking-wider
              focus:outline-none
              focus:border-green-500/60
              focus:ring-2 focus:ring-cyan-500/20
              transition-all duration-300
            "
            style={{ letterSpacing: "0.5px" }}
          />

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`
              flex items-center justify-center gap-2
              w-full sm:w-auto
              px-4 sm:px-5 py-3 sm:py-4
              rounded-xl
              text-sm
              font-medium
              transition-all duration-300
              whitespace-nowrap
              border border-white/70
              ring-1 ring-white/30
              ${
                copied
                  ? "bg-emerald-600 text-white shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] shadow-emerald-500/50"
                  : "bg-slate-800/40 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] hover:scale-105"
              }
            `}
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyCard;
