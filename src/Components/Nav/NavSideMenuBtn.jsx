function NavSideMenuBtn({ isShowNav, setIsShowNav }) {
   return (
      <button
         className="block md:hidden border-2 border-zinc-600 dark:border-white/85 bg-white dark:bg-black text-zinc-800 dark:text-white p-1.5 rounded-lg"
         onClick={() => setIsShowNav(!isShowNav)}
      >
         <svg className="size-6 ">
            <use href="#bars-3"></use>
         </svg>
      </button>
   );
}

export default NavSideMenuBtn;
