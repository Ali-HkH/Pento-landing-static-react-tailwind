import React, { useState } from "react";

function Nav() {
   const [isShowNav, setIsShowNav] = useState(false);
   const [isShowLogin, setIsShowLogin] = useState(false);

   return (
      <header className="sticky top-0 container-fluid flex flex-wrap md:flex-nowrap items-center justify-between z-50 pt-4 md:py-4 shadow-lg bg-white dark:bg-black">
         {/* logo */}
         <a href="#" className="shrink-0 md:ml-6 lg:ml-16 2xl:ml-28">
            <img
               src="./imgs/logo-black.png"
               className="inline-block dark:hidden w-36 aspect-auto md:w-[180px]"
               alt="logo"
            />
            <img
               src="./imgs/logo-white.png"
               className="hidden dark:inline-block w-36 aspect-auto md:w-[180px]"
               alt="logo"
            />
         </a>
         {/* navigation */}
         {/* nav-icon */}
         <button
            className="block md:hidden border-2 border-zinc-600 dark:border-white/85 bg-white dark:bg-black text-zinc-800 dark:text-white p-1.5 rounded-lg"
            onClick={() => setIsShowNav(!isShowNav)}
         >
            <svg className="size-6 ">
               <use href="#bars-3"></use>
            </svg>
         </button>
         {/* nav */}
         <nav
            className={`${
               isShowNav ? "max-h-[380px]" : "max-h-0 md:max-h-max"
            } flex flex-col items-start gap-y-4 md:flex-row md:justify-between md:items-center w-full pb-4 md:pb-0 bg-white dark:bg-black text-sm md:text-base font-Dana-med md:font-Dana-reg overflow-y-hidden transition-nav`}
         >
            {/* nav menu */}
            <div className="flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-center gap-x-6 pt-4 md:pt-0   2xl:gap-x-10 md:ml-auto child-hover:text-emerald-500 child:transition-colors">
               <a href="#home">خانه</a>
               <a href="#about">درباره ما</a>
               <a href="#offer">خدمات ما</a>
               <a href="#team">تیم ما</a>
               <a href="#">وبلاگ</a>
               <a href="#">تماس با ما</a>
            </div>
            {/* border */}
            <span className="md:hidden w-36 h-[2px] bg-emerald-500"></span>
            {/* tel-login */}
            <div className="flex flex-col items-start gap-y-4 md:hidden lg:flex lg:flex-row lg:items-center gap-x-8 child:transition-colors">
               <a
                  href="#"
                  className="flex-center md:hidden xl:flex-center gap-x-1 hover:text-emerald-500 "
               >
                  <span>تلفن ما:</span>
                  <span className="text-ltr">021-3310-5540</span>
               </a>
               <a href="#" className="hover:text-emerald-500">
                  ورود کاربران
               </a>
               <a
                  href="#"
                  className="flex-center px-4 py-2 md:px-6 md:py-3 rounded-md text-white bg-emerald-500 hover:bg-emerald-500/85"
               >
                  ثبت نام
               </a>
            </div>
         </nav>
         {/* user-login */}
         <div
            className="relative group hidden md:flex-center lg:hidden p-3 bg-emerald-500 hover:bg-emerald-500/85 rounded-full transition-colors"
            onClick={() => setIsShowLogin(!isShowLogin)}
         >
            <svg className="size-7 text-white">
               <use href="#user"></use>
            </svg>
            <div
               className={`${
                  isShowLogin ? "opacity-100 visible" : "opacity-0 invisible"
               } absolute top-14 left-6 flex flex-col items-center w-32 p-3 gap-y-3 child-hover:text-emerald-500 bg-slate-100 dark:bg-zinc-900 rounded-md border-b-2 border-emerald-500 shadow-lg transition-all delay-100 child:transition-colors`}
            >
               <a href="#">ورود کاربران</a>
               <a href="#">ثبت نام</a>
            </div>
         </div>
      </header>
   );
}

export default Nav;
