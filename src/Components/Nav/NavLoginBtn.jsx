import { useState } from "react";

function NavLoginBtn() {
   const [isShowLogin, setIsShowLogin] = useState(false);

   return (
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
   );
}

export default NavLoginBtn;
