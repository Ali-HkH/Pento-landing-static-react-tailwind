import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import WeblogBox from "../WeblogBox/WeblogBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Weblog() {
   return (
      <div
         id="weblog"
         className="container py-[50px] md:py-[70px] lg:py-[100px]"
      >
         <SectionHeading
            title="اخبار ویژه و وبلاگ"
            subTitle="اخبار و وبلاگ"
            center={true}
         />

         <div>
            <Swiper
               breakpoints={{
                  DEFAULT: {
                     spaceBetween: 10,
                     slidesPerView: 1,
                  },
                  576: {
                     spaceBetween: 20,
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
               }}
               pagination={{
                  clickable: true,
               }}
               onSwiper={(swiper) => {
                  if (swiper.pagination.el) {
                     swiper.pagination.el.style.position = "static";
                     swiper.pagination.el.style.paddingTop = "20px";
                  }
               }}
               modules={[Pagination]}
               style={{
                  "--swiper-pagination-color": "#10b981",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "12px",
                  "--swiper-pagination-bullet-horizontal-gap": "8px",
               }}
               className="mySwiper"
            >
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-1.jpg"
                     name="مارک مولر"
                     date="21 دی 1401"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-2.jpg"
                     name="جان اسمیت"
                     date="10 تیر 1401"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-3.jpg"
                     name="آدام استون"
                     date="18 فروردین 1402"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-4.jpg"
                     name="جک مارتینز"
                     date="5 آبان 1402"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-1.jpg"
                     name="مارک مولر"
                     date="21 دی 1401"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-2.jpg"
                     name="جان اسمیت"
                     date="10 تیر 1401"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-3.jpg"
                     name="آدام استون"
                     date="18 فروردین 1402"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <WeblogBox
                     img="./imgs/team/team-4.jpg"
                     name="جک مارتینز"
                     date="5 آبان 1402"
                     title="وام مسکن شما به چه معناست و 5 راه برای بهبود عملکرد"
                  />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
}

export default Weblog;
