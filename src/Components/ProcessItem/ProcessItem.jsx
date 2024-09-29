import React, { useState } from "react";

function ProcessItem({ text, number, openedProcess, setOpenedProcess }) {
   const [isProcessExpand, setIsProcessExpand] = useState(false);

   const accordionClickHandler = (number) => {
      if (number !== openedProcess) {
         setOpenedProcess(number);
         setIsProcessExpand(true);
      } else {
         setIsProcessExpand(!isProcessExpand);
      }
   };

   return (
      <div
         className={`border-r border-r-emerald-500 ${
            !isProcessExpand && "last:border-none"
         }`}
      >
         <button
            className="pb-4 relative"
            onClick={() => accordionClickHandler(number)}
         >
            <span className="absolute -right-6 -top-3 size-[50px] bg-emerald-500 text-white rounded-full  flex-center">
               {number}
            </span>
            <span className="inline-block pr-10 text-lg font-Dana-bold">
               {text}
            </span>
         </button>
         <div
            className={`${
               number === openedProcess && isProcessExpand
                  ? "max-h-[120px] opacity-100 "
                  : "max-h-0 opacity-0 "
            }  lg:w-[376px] xl:w-[476px] 2xl:w-[576px] overflow-hidden pr-10 pb-5 text-[15px] font-Dana-med transition-all duration-300`}
         >
            <p className="mb-2.5">
               لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
               ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
            </p>
            <p className="text-slate-400 ">
               لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
               ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
               لورم ایپسوم استاندارد صنعت است.
            </p>
         </div>
      </div>
   );
}

export default ProcessItem;
