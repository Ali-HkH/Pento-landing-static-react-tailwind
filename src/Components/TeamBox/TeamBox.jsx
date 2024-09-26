import React from "react";

function TeamBox({ name, job, img }) {
   return (
      <div className="group text-center">
         <div className="relative rounded-2xl overflow-hidden mb-[30px] child:transition-all child:duration-300">
            <img className="group-hover:scale-110" src={img} alt="team" />
            <div className="opacity-0 invisible absolute bottom-0 right-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-10 flex gap-x-1.5 bg-emerald-500 p-5 rounded-e-xl child:size-7 child:p-2 child:rounded-full child:bg-white child:text-emerald-500 child:cursor-pointer">
               <svg className="hover:bg-black hover:text-white hover:-translate-y-[1px] transition-all duration-300">
                  <use href="#facebook"></use>
               </svg>
               <svg className="hover:bg-black hover:text-white hover:-translate-y-[1px] transition-all duration-300">
                  <use href="#twitter"></use>
               </svg>
               <svg className="hover:bg-black hover:text-white hover:-translate-y-[1px] transition-all duration-300">
                  <use href="#instagram"></use>
               </svg>
               <svg className="hover:bg-black hover:text-white hover:-translate-y-[1px] transition-all duration-300">
                  <use href="#linkedin"></use>
               </svg>
            </div>
         </div>
         <div>
            <h1 className="font-Dana-bold text-xl lg:text-2xl dark:text-white pb-2.5">
               {name}
            </h1>
            <span className="text-sm lg:text-base text-zinc-500 dark:text-white ">
               {job}
            </span>
         </div>
      </div>
   );
}

export default TeamBox;
