import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import TeamBox from "../TeamBox/TeamBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Team() {
   return (
      <div id="team" className="container py-[50px] md:py-[70px] lg:py-[100px]">
         <SectionHeading
            title="کارکنان با تجربه ما"
            subTitle="تیم ما"
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
                  <TeamBox
                     name="مارک مولر"
                     job="طراح رابط کاربری"
                     img="./imgs/team/team-1.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="جان اسمیت"
                     job="طراح وب"
                     img="./imgs/team/team-2.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="آدام استون"
                     job="توسعه دهنده فرانت اند"
                     img="./imgs/team/team-3.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="جک مارتینز"
                     job="توسعه دهنده بک اند"
                     img="./imgs/team/team-4.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="مارک مولر"
                     job="طراح رابط کاربری"
                     img="./imgs/team/team-1.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="جان اسمیت"
                     job="طراح وب"
                     img="./imgs/team/team-2.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="آدام استون"
                     job="توسعه دهنده فرانت اند"
                     img="./imgs/team/team-3.jpg"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <TeamBox
                     name="جک مارتینز"
                     job="توسعه دهنده بک اند"
                     img="./imgs/team/team-4.jpg"
                  />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
}

export default Team;
