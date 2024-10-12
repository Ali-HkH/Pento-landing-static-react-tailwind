import React from "react";

function WeblogBox({ img, name, date, title }) {
   return (
      <div className="p-8 mb-8 group bg-slate-100 dark:bg-about hover:bg-about transition-colors">
         <div className="w-min px-4 py-1.5 text-white bg-emerald-500 mb-7 rounded-md">
            رهن
         </div>
         <div className="mb-5 flex items-center justify-start gap-x-2 ">
            <div className="size-[40px] rounded-full overflow-hidden">
               <img src={img} alt="author" />
            </div>
            <span className="text-xs md:text-sm text-gray-500 dark:text-white pl-3 group-hover:text-white transition-colors">
               {name}
            </span>
            <svg className="text-emerald-500 size-4">
               <use href="#calendar"></use>
            </svg>
            <span className="text-xs md:text-sm text-gray-500 dark:text-white group-hover:text-white transition-colors">
               {date}
            </span>
         </div>
         <h1 className="text-xl lg:text-[22px]/[28px] text-zinc-800 dark:text-white mb-4 line-clamp-2 group-hover:text-white transition-colors">
            {title}
         </h1>
         <p className="text-gray-500 dark:text-white line-clamp-4 group-hover:text-white transition-colors">
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
         </p>
      </div>
   );
}

export default WeblogBox;
