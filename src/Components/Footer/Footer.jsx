import React from "react";
import PaymentCard from "../PaymentCard/PaymentCard";
import FooterList from "../FooterList/FooterList";

function Footer() {
   return (
      <div className="bg-about text-white pt-[50px] md:pt-[70px] lg:pt-[100px] ">
         <div className="container">
            <div className="w-full flex flex-wrap lg:flex-nowrap justify-between">
               <div className="mb-6 sm:max-w-[280px] 2xl:max-w-[350px] pl-5">
                  <div className="w-[180px] aspect-auto mb-8">
                     <img src="./imgs/logo-white.png" alt="logo" />
                  </div>
                  <p className="mb-5">
                     لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد و
                     استاندارد صنعت بوده است. لورم ایپسوم استاندارد صنعت است.
                  </p>
                  <div className="flex gap-x-4">
                     <svg className="text-white bg-emerald-500 hover:text-emerald-500 hover:bg-white size-7 p-1.5 rounded-full hover:-translate-y-1 transition-all cursor-pointer">
                        <use href="#facebook"></use>
                     </svg>
                     <svg className="text-white bg-emerald-500 size-7 p-1.5 rounded-full cursor-pointer hover:text-emerald-500 hover:bg-white hover:-translate-y-1 transition-all">
                        <use href="#twitter"></use>
                     </svg>
                     <svg className="text-white bg-emerald-500 size-7 p-1.5 rounded-full cursor-pointer hover:text-emerald-500 hover:bg-white hover:-translate-y-1 transition-all">
                        <use href="#linkedin"></use>
                     </svg>
                     <svg className="text-white bg-emerald-500 size-7 p-1.5 rounded-full cursor-pointer hover:text-emerald-500 hover:bg-white hover:-translate-y-1 transition-all">
                        <use href="#instagram"></use>
                     </svg>
                  </div>
               </div>
               <FooterList title="لینک های سریع">
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        درباره ما
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        چک لیست وام مسکن
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        انتخاب شما
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        مخاطب
                     </span>
                  </li>
               </FooterList>
               <FooterList title="شرکت">
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        وبلاگ
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        سوالات متداول
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        محاسبه کننده وام
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        ماشین حساب وام
                     </span>
                  </li>
               </FooterList>
               <FooterList title="پشتیبانی">
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        تماس با ما
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        حریم خصوصی
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        محاسبه کننده وام
                     </span>
                  </li>
                  <li>
                     <span className="size-2.5 bg-emerald-500 rounded-full"></span>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        شرایط و ضوابط
                     </span>
                  </li>
               </FooterList>
               <FooterList title="اطلاعات تماس">
                  <li>
                     <svg className="size-4 text-emerald-500">
                        <use href="#phone"></use>
                     </svg>
                     <span className="hover:text-emerald-500 cursor-pointer text-ltr">
                        +989119119192
                     </span>
                  </li>
                  <li>
                     <svg className="size-4 text-emerald-500">
                        <use href="#chat-bubble-left"></use>
                     </svg>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        info@pento.com
                     </span>
                  </li>
                  <li>
                     <svg className="size-6 text-emerald-500">
                        <use href="#map-pin"></use>
                     </svg>
                     <span className="hover:text-emerald-500 cursor-pointer">
                        ایران، استان تهران، میدان آزادی
                     </span>
                  </li>
               </FooterList>
            </div>
            <div className="w-full mt-[30px] lg:mt-[70px] py-8 flex flex-col md:flex-row items-center justify-between gap-x-14 border-t border-gray-400/40">
               <p>
                  کپی رایت © 1402 پنتو. تمام حقوق قالب محفوظ است. طراحی{" "}
                  <span className="text-emerald-500">Barat Hadian</span> و توسعه
                  توسط <span className="text-emerald-500">Ali HkH</span>
               </p>
               <div className="flex gap-x-1.5 lg:gap-x-2.5 mt-2.5">
                  <PaymentCard img="./imgs/payment/visa.jpg" />
                  <PaymentCard img="./imgs/payment/master-card.jpg" />
                  <PaymentCard img="./imgs/payment/paypal.jpg" />
                  <PaymentCard img="./imgs/payment/skrill.jpg" />
                  <PaymentCard img="./imgs/payment/master-card2.jpg" />
                  <PaymentCard img="./imgs/payment/visa2.jpg" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
