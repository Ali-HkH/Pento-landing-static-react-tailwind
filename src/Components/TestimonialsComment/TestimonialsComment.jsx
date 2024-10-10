import React from "react";

function TestimonialsComment({ name, job }) {
   return (
      <div>
         <div className="flex items-center gap-x-4 pb-8">
            <svg className="size-16 flex-center bg-emerald-500 text-white p-3 rounded-full">
               <use className="size-12" href="#chat-bubble-left"></use>
            </svg>
            <div className="flex flex-col">
               <span className="text-lg font-Dana-bold dark:text-white mb-2.5">
                  {name}
               </span>
               <span className="text-sm text-gray-400 dark:text-white">
                  {job}
               </span>
            </div>
         </div>
         <p className="text-sm lg:text-base text-gray-400 dark:text-white pb-6 sm:max-w-[515px] xl:max-w-full leading-6">
            “لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار
            چاپ و متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را
            در بر می گیرد. ساختار متن است.”
         </p>
         <div className="flex items-center justify-start gap-x-1.5">
            <svg className="size-5 text-yellow-300">
               <use href="#star"></use>
            </svg>
            <svg className="size-5 text-yellow-300">
               <use href="#star"></use>
            </svg>
            <svg className="size-5 text-yellow-300">
               <use href="#star"></use>
            </svg>
            <svg className="size-5 text-yellow-300">
               <use href="#star"></use>
            </svg>
            <svg className="size-5 text-yellow-300">
               <use href="#star"></use>
            </svg>
         </div>
      </div>
   );
}

export default TestimonialsComment;
