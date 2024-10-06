import React from "react";

function LoanBox({ title, logo }) {
   return (
      <div className="group relative p-8 bg-slate-100 dark:bg-about hover:bg-about transition-colors cursor-pointer">
         <span className="text-emerald-500 text-sm absolute top-4 left-4">
            وام مسکن
         </span>
         <div className="size-[50px] lg:size-[70px] flex-center mb-5 bg-emerald-500 text-white rounded-full group-hover:bg-white group-hover:text-emerald-500 transition-colors">
            <svg className="size-7 lg:size-9">
               <use href={`#${logo}`}></use>
            </svg>
         </div>
         <h1 className="mb-4 dark:text-white group-hover:text-white font-Dana-bold text-xl lg:text-[22px]/8 line-clamp-1 transition-colors">
            {title}
         </h1>
         <p className="mb-4 text-gray-500 dark:text-white group-hover:text-white transition-colors">
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم ساختار متن
            است.
         </p>
      </div>
   );
}

export default LoanBox;
