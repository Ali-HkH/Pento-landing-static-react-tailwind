function NavMenuLeft() {
   return (
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
   );
}

export default NavMenuLeft;
