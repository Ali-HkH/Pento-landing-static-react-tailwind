import React, { useRef, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import LoanBox from "../LoanBox/LoanBox";

function Loan() {
   const [loanCategory, setLoanCategory] = useState("buy");
   const swiperRef = useRef();

   return (
      <div className="container pt-[50px] pb-[20px] md:pt-[70px] md:pb-[40px] lg:pt-[100px] lg:pb-[70px]">
         <SectionHeading
            title="جستوجو یک وام"
            subTitle="دسته بندی وام"
            center={true}
         />
         {/* loan-nav */}
         <div className="mt-[45px]">
            <div className="loan-nav flex justify-center gap-x-4 mb-11 xl:mb-20 border-b border-gray-300 dark:border-gray-200/30 ">
               <span
                  className={`${
                     loanCategory === "buy" &&
                     "border-b-2 border-emerald-600 text-emerald-600"
                  } w-24 flex-center pb-5 hover:border-b-[3px] hover:border-emerald-600 cursor-pointer transition-all`}
                  onClick={() => setLoanCategory("buy")}
               >
                  خرید
               </span>
               <span
                  className={`${
                     loanCategory === "house" &&
                     "border-b-2 border-emerald-600 text-emerald-600"
                  } w-24 flex-center pb-5 hover:border-b-[3px] hover:border-emerald-600 cursor-pointer transition-all`}
                  onClick={() => setLoanCategory("house")}
               >
                  خرید خانه
               </span>
               <span
                  className={`${
                     loanCategory === "money" &&
                     "border-b-2 border-emerald-600 text-emerald-600"
                  } w-24 flex-center pb-5 hover:border-b-[3px] hover:border-emerald-600 cursor-pointer transition-all`}
                  onClick={() => setLoanCategory("money")}
               >
                  تامین مالی
               </span>
            </div>
            {/* loan-swiper */}
            <div className="loan-swiper relative">
               <Swiper
                  breakpoints={{
                     DEFAULT: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                     },
                     576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                     },
                     768: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                     },
                     992: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                     },
                     1200: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                     },
                  }}
                  loop={true}
                  modules={[Navigation]}
                  onBeforeInit={(swiper) => {
                     swiperRef.current = swiper;
                  }}
                  className="mySwiper"
               >
                  <SwiperSlide>
                     <LoanBox
                        title="اجاره و رهن خانه های ویلایی"
                        logo="home-modern"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <LoanBox
                        title="ایده ها و راه حل های نوآورانه"
                        logo="light-bulb"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <LoanBox
                        title="اجاره و رهن خانه های ویلایی"
                        logo="home-modern"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <LoanBox title="انجام معاملات بین المللی" logo="dollar" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <LoanBox
                        title="حفظ ارزش پول ریالی و کارایی مالی"
                        logo="money"
                     />
                  </SwiperSlide>
               </Swiper>
               <div className="w-full flex justify-center items-center gap-x-4 mt-7 xl:px-64 xl:absolute xl:-top-24 xl:justify-between z-30">
                  <button
                     onClick={() => swiperRef.current?.slidePrev()}
                     className="flex-center size-[45px] xl:size-[55px] bg-emerald-500 rounded-full text-white hover:bg-about transition-colors"
                  >
                     <svg className="size-6 xl:size-8 rotate-90">
                        <use href="#arrow-up-mini"></use>
                     </svg>
                  </button>
                  <button
                     onClick={() => swiperRef.current?.slideNext()}
                     className="flex-center size-[45px] xl:size-[55px] bg-emerald-500 rounded-full text-white hover:bg-about transition-colors"
                  >
                     <svg className="size-6 xl:size-8 -rotate-90">
                        <use href="#arrow-up-mini"></use>
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Loan;
