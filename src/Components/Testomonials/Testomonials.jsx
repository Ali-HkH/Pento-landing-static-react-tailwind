import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialsComment from "../TestimonialsComment/TestimonialsComment";

function Testomonials() {
   return (
      <div className="relative">
         <div className="absolute left-0 top-0 -z-0">
            <img src="./imgs/shape-testomonials.png" alt="shape" />
         </div>
         <div className=" container pb-[50px] md:pb-[70px] lg:pb-[100px]">
            <div className="flex flex-col items-start gap-y-9 md:flex-row xl:items-center">
               <div>
                  <img className="w-[85%]" src="./imgs/testimonials-img.png" />
               </div>
               <div className=" w-10/12 md:pr-2 md:w-1/2">
                  <SectionHeading
                     title="مشتریان چه می گویند"
                     subTitle="بازخورد مشتریان"
                     center={false}
                  />
                  <div className="mt-10">
                     <Swiper
                        loop={true}
                        pagination={true}
                        onSwiper={(swiper) => {
                           if (swiper.pagination.el) {
                              swiper.pagination.el.style.position = "static";
                              swiper.pagination.el.style.paddingTop = "30px";
                              swiper.pagination.el.style.textAlign = "right";
                           }
                        }}
                        modules={[Pagination]}
                        style={{
                           "--swiper-pagination-color": "#10b981",
                           "--swiper-pagination-bullet-inactive-color":
                              "#999999",
                           "--swiper-pagination-bullet-inactive-opacity": "1",
                           "--swiper-pagination-bullet-size": "12px",
                           "--swiper-pagination-bullet-horizontal-gap": "8px",
                        }}
                        className="mySwiper"
                     >
                        <SwiperSlide>
                           <TestimonialsComment
                              name="جان اسمیت"
                              job="طراح وب"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <TestimonialsComment
                              name="مارک مولر"
                              job="طراح رابط کاربری"
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <TestimonialsComment
                              name="آدام استون"
                              job="توسعه دهنده فرانت"
                           />
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Testomonials;
