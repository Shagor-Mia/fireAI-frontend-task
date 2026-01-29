const Card = ({ card }) => {
  const { title, value, percent, icon } = card;
  const isNegative = percent.startsWith("-");

  return (
    <div className="relative w-full rounded-xl md:rounded-2xl bg-[rgb(14,24,54)] border border-white/10 shadow-xl overflow-hidden transition-transform hover:scale-[1.01]">
      {/* Inner */}
      <div className="relative p-6 md:p-7 flex items-start justify-between">
        {/* Left content */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] md:text-sm text-gray-400 tracking-wide">
            {title}
          </span>

          <h1 className="md:text-3xl  text-white">{value}</h1>

          <span
            className={`text-sm  ${
              isNegative ? "text-red-400" : "text-emerald-400"
            }`}
          >
            {percent}
          </span>
        </div>

        {/* Right icon */}
        <div className="">
          <img src={icon} alt="" className="w-8 md:w-12" />
        </div>
      </div>
    </div>
  );
};

export default Card;
