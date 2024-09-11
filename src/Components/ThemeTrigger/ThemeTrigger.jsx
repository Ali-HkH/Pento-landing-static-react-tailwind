import React, { useEffect, useRef, useState } from "react";

function ThemeTrigger() {
   const [isLight, setIsLight] = useState(null);
   const sliderRef = useRef(null);

   useEffect(() => {
      if (
         localStorage.theme === "dark" ||
         (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         setThemeDark();
      } else {
         setThemeLight();
      }
   }, []);

   function setThemeLight() {
      document.documentElement.classList.remove("dark");
      sliderRef.current.classList.remove("mr-[20px]");
      setIsLight(true);
   }

   function setThemeDark() {
      document.documentElement.classList.add("dark");
      sliderRef.current.classList.add("mr-[20px]");
      setIsLight(false);
   }

   const changeTheme = () => {
      if (isLight) {
         setThemeDark();
      } else {
         setThemeLight();
      }
   };

   return (
      <div className="fixed bottom-14 left-20">
         <div className="w-14 h-8 flex items-center bg-emerald-500 rounded-full p-1">
            <div
               className="transition-all duration-300 cursor-pointer"
               ref={sliderRef}
               onClick={changeTheme}
            >
               {isLight ? (
                  <svg className=" size-7 bg-white text-yellow-400 rounded-full transition-all duration-200">
                     <use href="#sun"></use>
                  </svg>
               ) : (
                  <svg className="size-7 bg-white text-yellow-400 rounded-full transition-all duration-200">
                     <use href="#moon"></use>
                  </svg>
               )}
            </div>
         </div>
      </div>
   );
}

export default ThemeTrigger;
