import React from "react";

function FactBox({ year, text }) {
   return (
      <div className="flex items-center justify-start gap-x-3 p-6 md:p-9 lg:p-5 xl:p-9 mt-6 mx-3 bg-slate-200 rounded-lg hover:-translate-y-2 transition-all duration-300">
         <span className="text-emerald-500 font-Dana-bold text-3xl md:text-[55px] lg:text-3xl xl:text-[55px]">
            {year}
         </span>
         <span className="text-zinc-800 text-sm md:text-lg lg:text-sm xl:text-lg font-Dana-bold">
            {text}
         </span>
      </div>
   );
}

export default FactBox;
