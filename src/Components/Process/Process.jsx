import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProcessItem from "../ProcessItem/ProcessItem";

function Process() {
   return (
      <div id="process">
         <div className="container text-zinc-800 py-[50px] md:py-[70px] lg:py-[100px]">
            <SectionHeading
               title="برو فراتر از پنتو"
               subTitle="مرحله و فرآیند ما"
               center={true}
            />
            <div className="flex flex-col items-start gap-y-5 lg:flex-row lg:items-center lg:gap-x-5">
               <div className="px-3">
                  <ProcessItem text="ارزیابی" number="1" />
                  <ProcessItem text="گفتوگو" number="2" />
                  <ProcessItem text="کاربرد" number="3" />
                  <ProcessItem text="اسناد" number="4" />
                  <ProcessItem text="پذیره نویسی اولیه" number="5" />
               </div>
               <div className="px-3 w-full lg:w-auto">
                  <img src="./imgs/process-img.png" alt="process-img" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Process;
