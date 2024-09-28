import React from "react";
import FactBox from "../FactBox/FactBox";
import SectionHeading from "../SectionHeading/SectionHeading";

function FunFact() {
   return (
      <div className="container py-[50px] md:py-[70px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-center">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-[50%] shrink-0">
            <FactBox text="تجربه کاری مشاوره" year="20" />
            <FactBox text="جلب رضایت مشتریان" year="90" />
            <FactBox text="شرکت معتبر در جهان" year="56" />
            <FactBox text="مشتری در سراسر جهان" year="98" />
         </div>
         <div className="mt-8 lg:pr-10 lg:mt-0">
            <SectionHeading
               title="حقیقتی وجود دارد که می دانید"
               subTitle="حقیقت جالب"
               center={false}
            />
            <p className="font-Dana-med mt-5">
               لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
               ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
            </p>
         </div>
      </div>
   );
}

export default FunFact;
