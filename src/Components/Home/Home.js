import React from "react";

function Home() {
   return (
      <section
         id="home"
         className="container-fluid py-[50px] md:py-[80px] lg:py-[100px] flex flex-col gap-y-8 lg:flex-row items-start justify-between dark:text-zinc-800"
      >
         <div className="lg:max-w-[50%] lg:pt-6 2xl:pt-16">
            <h6 className="text-sm lg:text-base lg:font-Dana-med mb-4 text-emerald-500 ">
               ارائه دهنده قابل اعتماد پایدار
            </h6>
            <h1 className="text-3xl/[50px] md:text-5xl/[60px] lg:text-6xl/[80px] xl:text-7xl/[80px] 3xl:text-[86px]/[110px] pb-3 font-Dana-bold">
               خرید خانه با اطمینان از پنتو
            </h1>
            <p className="text-gray-500 max-w-[500px]">
               لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
               ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
               سادگی ساختار چاپ و متن را در بر می گیرد.
            </p>
            <div className="flex items-center justify-start gap-x-8 pt-8">
               <button className="flex-center py-3 px-5 text-white rounded-lg bg-emerald-500 hover:bg-black transition-colors">
                  کارشناس وام مسکن
               </button>
               <a
                  href="#"
                  className="group flex items-center gap-x-3 font-Dana-med"
               >
                  <span className="inline-block p-3 bg-black group-hover:bg-emerald-500 rounded-full transition-colors">
                     <svg className="size-6 rounded-full text-orange-100">
                        <use href="#play"></use>
                     </svg>
                  </span>
                  معرفی با شرکت
               </a>
            </div>
         </div>
         <div className="max-w-[490px] md:max-w-[672px] lg:max-w-auto">
            <img src="./imgs/home-pic.png" alt="home-pic" />
         </div>
      </section>
   );
}

export default Home;
