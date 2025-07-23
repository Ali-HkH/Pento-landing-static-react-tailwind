import { useState } from "react";

function LoanNav() {
   const [loanCategory, setLoanCategory] = useState("buy");

   return (
      <div className="mt-[45px]">
         <div className="loan-nav flex justify-center gap-x-1 mb-11 xl:mb-20 border-b border-gray-300 dark:border-gray-200/30 ">
            <div
               className={`relative group w-24 flex-center pb-5 transition-all cursor-pointer ${
                  loanCategory === "buy" && "text-emerald-500"
               }`}
               onClick={() => setLoanCategory("buy")}
            >
               <span
                  className={`absolute h-0.5 right-0 bottom-0 bg-emerald-500 transition-all duration-300 group-hover:w-24 ${
                     loanCategory === "buy" ? "w-24" : " w-0"
                  }`}
               ></span>
               خرید
            </div>
            <div
               className={`relative group w-24 flex-center pb-5 transition-all cursor-pointer ${
                  loanCategory === "house" && "text-emerald-500"
               }`}
               onClick={() => setLoanCategory("house")}
            >
               <span
                  className={`absolute h-0.5 right-0 bottom-0 bg-emerald-500 transition-all duration-300 group-hover:w-24 ${
                     loanCategory === "house" ? "w-24" : " w-0"
                  }`}
               ></span>
               خرید خانه
            </div>
            <div
               className={`relative group w-24 flex-center pb-5 transition-all cursor-pointer ${
                  loanCategory === "money" && "text-emerald-500"
               }`}
               onClick={() => setLoanCategory("money")}
            >
               <span
                  className={`absolute h-0.5 right-0 bottom-0 bg-emerald-500 transition-all duration-300 group-hover:w-24 ${
                     loanCategory === "money" ? "w-24" : " w-0"
                  }`}
               ></span>
               تامین مالی
            </div>
         </div>
      </div>
   );
}

export default LoanNav;
