function AboutFooterItem({text1, text2, svg}) {
   return (
      <div className="group flex items-center gap-x-3 my-5">
         <div className="flex-center text-gray-200 bg-emerald-900 group-hover:bg-emerald-500 transition-colors p-2.5 rounded-full">
            <svg className="size-7">
               <use href={`#${svg}`}></use>
            </svg>
         </div>
         <div className="flex flex-col gap-y-2">
            <span>{text1}</span>
            <span>{text2}</span>
         </div>
      </div>
   );
}

export default AboutFooterItem;
