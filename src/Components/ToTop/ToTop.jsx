import React from "react";

function ToTop() {
   function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }

   return (
      <button
         onClick={() => scrollToTop()}
         className="fixed bottom-14 left-10 z-50 bg-emerald-500 p-3 rounded-full hover:bg-about transition-colors duration-300"
      >
         <svg className="size-5 text-white">
            <use href="#arrow-up-mini"></use>
         </svg>
      </button>
   );
}

export default ToTop;
