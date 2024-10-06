import React, { useState } from "react";

function FAQItem({ title, number, openedFAQ, setOpenedFAQ }) {
   const [isFAQExpand, setIsFAQExpand] = useState(false);

   const accordionClickHandler = (number) => {
      if (number !== openedFAQ) {
         setOpenedFAQ(number);
         setIsFAQExpand(true);
      } else {
         setIsFAQExpand(!isFAQExpand);
      }
   };

   return (
      <div className="mb-5 max-w-[650px] lg:w-full">
         <div
            className={`${
               number === openedFAQ && isFAQExpand
                  ? "bg-emerald-500 text-white"
                  : "bg-white dark:bg-about text-zinc-800 dark:text-white"
            } p-6 flex justify-between  transition-colors`}
            role="button"
            onClick={() => accordionClickHandler(number)}
         >
            <p className="text-lg font-Dana-bold">{title}</p>
            <div
               className={`${
                  number === openedFAQ && isFAQExpand
                     ? "bg-white text-emerald-500"
                     : "bg-emerald-500 text-white"
               } size-6 px-1 flex-center rounded-full`}
            >
               {number === openedFAQ && isFAQExpand ? (
                  <svg className="size-6">
                     <use href="#minus-mini"></use>
                  </svg>
               ) : (
                  <svg className="size-6">
                     <use href="#plus-mini"></use>
                  </svg>
               )}
            </div>
         </div>
         <div
            className={`${
               number === openedFAQ && isFAQExpand
                  ? "max-h-[460px] opacity-100"
                  : "max-h-0 opacity-0 p-0"
            } bg-transparent p-5 pl-4 overflow-hidden transition-all duration-300`}
         >
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار
            چاپ و متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را
            در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می
            گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
         </div>
      </div>
   );
}

export default FAQItem;
