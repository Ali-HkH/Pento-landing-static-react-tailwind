import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import OfferBox from "../OfferBox/OfferBox";

function Offer() {
   return (
      <div
         id="offer"
         className="container pt-[50px] pb-5 md:pt-[70px] md:pb-10 lg:pt-[100px] lg:pb-[70px]"
      >
         <SectionHeading
            className="text-zinc-800 dark:text-white"
            title="ما برای شما پیشنهاد داریم"
            subTitle="چرا ما را انتخاب می کنید"
            center={true}
         />
         <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-x-6 lg:flex-nowrap">
            <OfferBox
               title="تامین مالی طرح طبقه"
               img="./imgs/offer/offer-1.png"
            />
            <OfferBox title="وام های متعارف" img="./imgs/offer/offer-2.png" />
            <OfferBox title="خدمات وام مسکن" img="./imgs/offer/offer-3.png" />
         </div>
      </div>
   );
}

export default Offer;
