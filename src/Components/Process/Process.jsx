import React, { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProcessItem from "../ProcessItem/ProcessItem";

function Process() {
   const [openedProcess, setOpenedProcess] = useState(null);

   return (
      <div id="process">
         <div className="container text-zinc-800 py-[50px] md:py-[70px] lg:py-[100px]">
            <SectionHeading
               title="برو فراتر از پنتو"
               subTitle="مرحله و فرآیند ما"
               center={true}
            />
            <div className="flex flex-col items-start gap-y-5 lg:flex-row justify-start lg:items-center lg:gap-x-5">
               <div className="px-3">
                  <ProcessItem
                     text="ارزیابی"
                     number="1"
                     openedProcess={openedProcess}
                     setOpenedProcess={setOpenedProcess}
                  />
                  <ProcessItem
                     text="گفتوگو"
                     number="2"
                     openedProcess={openedProcess}
                     setOpenedProcess={setOpenedProcess}
                  />
                  <ProcessItem
                     text="کاربرد"
                     number="3"
                     openedProcess={openedProcess}
                     setOpenedProcess={setOpenedProcess}
                  />
                  <ProcessItem
                     text="اسناد"
                     number="4"
                     openedProcess={openedProcess}
                     setOpenedProcess={setOpenedProcess}
                  />
                  <ProcessItem
                     text="پذیره نویسی اولیه"
                     number="5"
                     openedProcess={openedProcess}
                     setOpenedProcess={setOpenedProcess}
                  />
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
