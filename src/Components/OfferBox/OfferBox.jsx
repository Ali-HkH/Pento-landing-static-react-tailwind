import React from "react";

function OfferBox({ img, title }) {
   return (
      <div className="group p-5 xl:p-8 w-[90%] md:w-[45%] lg:w-1/3 flex flex-col items-start gap-y-6 bg-offer dark:bg-about hover:bg-about hover:-translate-y-2 transition-all">
         <div>
            <img src={img} alt="offerbox-img" />
         </div>
         <h1 className="text-xl font-Dana-bold xl:text-2xl group-hover:text-white">
            {title}
         </h1>
         <div className="space-y-3.5 text-sm md:text-base text-gray-500 group-hover:text-white dark:text-white">
            <p className="flex items-center gap-x-1.5">
               <svg className="size-[18px] text-emerald-500 group-hover:text-white">
                  <use href="#check-circle"></use>
               </svg>
               نمایندگی به سطح بعدی
            </p>
            <p className="flex items-center gap-x-1.5">
               <svg className="size-[18px] text-emerald-500 group-hover:text-white">
                  <use href="#check-circle"></use>
               </svg>
               گزینه تامین مالی برای نمایندگی شما
            </p>
            <p className="flex items-center gap-x-1.5">
               <svg className="size-[18px] text-emerald-500 group-hover:text-white">
                  <use href="#check-circle"></use>
               </svg>
               مرکز بینش کسب وکار
            </p>
         </div>
         <a
            href="#"
            className="px-7 py-3.5 bg-emerald-500 text-white rounded-md text-sm md:text-base"
         >
            درخواست
         </a>
      </div>
   );
}

export default OfferBox;
