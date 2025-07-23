function TeamSocials() {
   return (
      <div className="opacity-0 invisible absolute bottom-0 right-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-10 flex gap-x-2 bg-emerald-500 p-4 rounded-e-xl child:size-6  child:rounded-full child:text-white dark:child:text-black child:cursor-pointer">
         <svg className="hover:-translate-y-1 transition-all duration-300">
            <use href="#facebook"></use>
         </svg>
         <svg className="hover:-translate-y-1  transition-all duration-300">
            <use href="#twitter"></use>
         </svg>
         <svg className="hover:-translate-y-1 transition-all duration-300">
            <use href="#instagram"></use>
         </svg>
         <svg className="hover:-translate-y-1 transition-all duration-300">
            <use href="#linkedin"></use>
         </svg>
      </div>
   );
}

export default TeamSocials;
