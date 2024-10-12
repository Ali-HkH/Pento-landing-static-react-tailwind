import React from "react";

function FooterList({ children, title }) {
   return (
      <div className="px-3 mb-6 max-w-[170px] xl:max-w-fit">
         <h1 className="mb-6 text-lg 2xl:text-[22px]/[30px] font-Dana-bold">
            {title}
         </h1>
         <ul className="flex flex-col child:flex child:justify-start child:items-center child:gap-x-2.5 child:mb-4 child:text-sm child:lg:text-base">
            {children}
         </ul>
      </div>
   );
}

export default FooterList;
