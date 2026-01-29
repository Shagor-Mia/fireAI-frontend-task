import { Search } from "lucide-react";
const SearchInput = () => {
  return (
    <div className="relative w-full my-5 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10  blur-xl opacity-0 group-focus-within:opacity-70 transition-opacity duration-300" />

      <div className="relative group">
        <input
          type="text"
          placeholder="Search repairs, devices, orders..."
          className="
            w-full
            pl-12
            pr-5
            py-3.5
            bg-slate-900/70
            border border-slate-700/60
            text-slate-100
            placeholder:text-slate-500
            rounded-xl  md:rounded-2xl
            text-base
            outline-none
            transition-all duration-300
            focus:border-blue-500/60
            focus:ring-2 focus:ring-blue-500/20
            focus:bg-slate-900
            hover:border-slate-600
            shadow-inner
          "
        />

        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
          <Search size={20} strokeWidth={2.2} />
        </div>

        {/* shine effect on focus */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default SearchInput;
