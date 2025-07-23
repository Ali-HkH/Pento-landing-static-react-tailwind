import { useState } from "react";
import AboutNavContent from "./AboutNavContent";

function AboutNav() {
   const [isTab1, setIsTab1] = useState(true);

   return (
      <div className="mt-6">
         <div className="my-0 flex border-b border-gray-400">
            <div
               className={`relative group w-24 flex-center pb-5 transition-all cursor-pointer ${
                  isTab1 && "text-emerald-500"
               }`}
               onClick={() => setIsTab1(true)}
            >
               <span
                  className={`absolute h-0.5 right-0 bottom-0 bg-emerald-500 transition-all duration-300 group-hover:w-24 ${
                     isTab1 ? "w-24" : " w-0"
                  }`}
               ></span>
               ماموریت ما
            </div>
            <div
               className={`relative group w-24 flex-center pb-5 transition-all cursor-pointer ${
                  !isTab1 && "text-emerald-500"
               }`}
               onClick={() => setIsTab1(false)}
            >
               <span
                  className={`absolute h-0.5 right-0 bottom-0 bg-emerald-500 transition-all duration-300 group-hover:w-24 ${
                     !isTab1 ? "w-24" : " w-0"
                  }`}
               ></span>
               دیدگاه ما
            </div>
         </div>
         <AboutNavContent isTab1={isTab1}/>
      </div>
   );
}

export default AboutNav;
