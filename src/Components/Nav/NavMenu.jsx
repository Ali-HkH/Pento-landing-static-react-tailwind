function NavMenu() {
   return (
      <div className="flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-center gap-x-6 pt-4 md:pt-0   2xl:gap-x-10 md:ml-auto child-hover:text-emerald-500 child:transition-colors">
         <a href="#home">خانه</a>
         <a href="#about">درباره ما</a>
         <a href="#offer">خدمات ما</a>
         <a href="#team">تیم ما</a>
         <a href="#weblog">وبلاگ</a>
         <a href="#contact">تماس با ما</a>
      </div>
   );
}

export default NavMenu;
