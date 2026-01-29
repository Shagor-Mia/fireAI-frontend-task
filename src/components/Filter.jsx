/* Type Filter */
export const TypeFilter = ({ value, onChange, options = [] }) => {
  return (
    <div className="flex items-center gap-2">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full
            px-5
            py-3.5
            bg-slate-900/70
            border border-slate-700/60
            text-slate-400
            placeholder:text-slate-500
            rounded-xl  md:rounded-2xl
            text-base
            outline-none
            transition-all duration-300
            focus:border-blue-500/60
            focus:ring-2 focus:ring-blue-500/20
            focus:bg-slate-900
            hover:border-slate-600
            shadow-inner"
      >
        <option value="all">All Type</option>
        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

/*  Filter2 */
export const IssueFilter = ({ value, onChange, options = [] }) => {
  return (
    <div className="flex items-center gap-2 ">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full
        text-slate-400
            px-5
            py-3.5
            bg-slate-900/70
            border border-slate-700/60
            
            placeholder:text-slate-500
           rounded-xl  md:rounded-2xl
            text-base
            outline-none
            transition-all duration-300
            focus:border-blue-500/60
            focus:ring-2 focus:ring-blue-500/20
            focus:bg-slate-900
            hover:border-slate-600
            shadow-inner"
      >
        <option value="all">All Issue</option>
        {options.map((issue) => (
          <option key={issue} value={issue}>
            {issue}
          </option>
        ))}
      </select>
    </div>
  );
};

/*  Filter1 */
export const Filter1 = ({ value, onChange, options = [] }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full
        text-slate-400
            px-5
            py-3.5
            bg-slate-900/70
            border border-slate-700/60
            
            placeholder:text-slate-500
           rounded-xl  md:rounded-2xl
            text-base
            outline-none
            transition-all duration-300
            focus:border-blue-500/60
            focus:ring-2 focus:ring-blue-500/20
            focus:bg-slate-900
            hover:border-slate-600
            shadow-inner"
    >
      <option value="all">Today</option>
      {options.map((issue) => (
        <option key={issue} value={issue}>
          {issue}
        </option>
      ))}
    </select>
  );
};
