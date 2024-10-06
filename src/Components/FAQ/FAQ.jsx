import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import FAQItem from "../FAQItem/FAQItem";

function FAQ() {
   const [openedFAQ, setOpenedFAQ] = useState(null);

   return (
      <div className="bg-about py-[50px] md:py-[70px] lg:py-[100px]">
         <div className="container-fluid flex flex-col justify-start gap-y-8 lg:flex-row lg:items-center">
            <div className="px-3 w-full lg:w-[80%] xl:w-[60%]">
               <img src="./imgs/faq-img.png" alt="FAQ-img" />
            </div>
            <div className="px-3 text-white">
               <SectionHeading
                  title="سوالی دارید؟ سوالات رایج را بخوانید و بپرسید"
                  subTitle="سوالات متداول"
                  center={false}
               />
               <div className="pt-9">
                  <FAQItem
                     title="چگونه واجد شرایط دریافت وام هستید؟"
                     number={1}
                     openedFAQ={openedFAQ}
                     setOpenedFAQ={setOpenedFAQ}
                  />
                  <FAQItem
                     title="چگونه یک وام را دریافت کنیم؟"
                     number={2}
                     openedFAQ={openedFAQ}
                     setOpenedFAQ={setOpenedFAQ}
                  />
                  <FAQItem
                     title="آیا می توانید وام مسکن دریافت کنید؟"
                     number={3}
                     openedFAQ={openedFAQ}
                     setOpenedFAQ={setOpenedFAQ}
                  />
                  <FAQItem
                     title="چقدر می توانید بپردازید؟"
                     number={4}
                     openedFAQ={openedFAQ}
                     setOpenedFAQ={setOpenedFAQ}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default FAQ;
