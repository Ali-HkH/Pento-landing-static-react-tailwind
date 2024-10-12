import React from "react";

function Subscribe() {
   return (
      <div id="subscribe">
         <div className="container py-[50px] md:py-[70px] lg:py-[100px]">
            <div className="flex flex-col items-center justify-center md:flex-row gap-x-2">
               <h1 className="w-full md:w-1/2 mb-5 text-white font-Dana-bold text-2xl lg:text-[40px]/[50px] px-3 ">
                  در خبرنامه ما مشترک شوید و آخرین اخبار را دریافت کنید
               </h1>
               <div className="w-full px-3 md:w-1/2 lg:relative">
                  <input
                     type="text"
                     placeholder="ایمیل خود را وارد کنید"
                     className="w-full py-5 px-6 rounded-xl text-zinc-800 appearance-none focus:outline-none"
                  />
                  <button className="w-full lg:max-w-fit p-4 mt-2.5 lg:absolute lg:-top-1.5 lg:left-4 bg-emerald-500 text-white rounded-xl ">
                     مشترک شدن
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Subscribe;
