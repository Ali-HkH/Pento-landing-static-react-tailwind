import PaymentCard from "./PaymentCard";
import FooterList from "./FooterList";
import FooterListItem from "./FooterListItem";
import FooterIcons from "./FooterIcons";

function Footer() {
   return (
      <div className="bg-about text-white pt-[50px] md:pt-[70px] lg:pt-[100px] ">
         <div className="container">
            <div className="w-full flex flex-wrap lg:flex-nowrap justify-between">
               <div className="mb-6 sm:max-w-[280px] 2xl:max-w-[350px] pl-5">
                  <div className="w-[180px] aspect-auto mb-8">
                     <img
                        src={`${process.env.PUBLIC_URL}/imgs/logo-white.png`}
                        alt="logo"
                     />
                  </div>
                  <p className="mb-5">
                     لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد و
                     استاندارد صنعت بوده است. لورم ایپسوم استاندارد صنعت است.
                  </p>
                  <div className="flex gap-x-4">
                     <FooterIcons icon="facebook" />
                     <FooterIcons icon="twitter" />
                     <FooterIcons icon="linkedin" />
                     <FooterIcons icon="instagram" />
                  </div>
               </div>
               <FooterList title="لینک های سریع">
                  <FooterListItem text="درباره ما" />
                  <FooterListItem text="چک لیست وام مسکن" />
                  <FooterListItem text="انتخاب شما" />
                  <FooterListItem text="مخاطب" />
               </FooterList>
               <FooterList title="شرکت">
                  <FooterListItem text="وبلاگ" />
                  <FooterListItem text="سوالات متداول" />
                  <FooterListItem text="محاسبه کننده وام" />
                  <FooterListItem text="ماشین حساب وام" />
               </FooterList>
               <FooterList title="پشتیبانی">
                  <FooterListItem text="تماس با ما" />
                  <FooterListItem text="حریم خصوصی" />
                  <FooterListItem text="ارزیابی قیمت" />
                  <FooterListItem text="شرایط و ضوابط" />
               </FooterList>
               <FooterList title="اطلاعات تماس">
                  <FooterListItem text="+989119119192" />
                  <FooterListItem text="info@pento.com" />
                  <FooterListItem text="ایران، استان تهران، میدان آزادی" />
               </FooterList>
            </div>
            <div className="w-full mt-[30px] lg:mt-[70px] py-8 flex flex-col md:flex-row items-center justify-between gap-x-14 border-t border-gray-400/40">
               <p>
                  کپی رایت © 1402 پنتو. تمام حقوق قالب محفوظ است. طراحی{" "}
                  <span className="text-emerald-500 cursor-pointer">
                     Barat Hadian
                  </span>{" "}
                  و توسعه توسط{" "}
                  <span className="text-emerald-500 cursor-pointer">
                     Ali HkH
                  </span>
               </p>
               <div className="flex gap-x-1.5 lg:gap-x-2.5 mt-2.5">
                  <PaymentCard
                     img={`${process.env.PUBLIC_URL}/imgs/payment/visa.jpg`}
                  />
                  <PaymentCard
                     img={`${process.env.PUBLIC_URL}/imgs/payment/master-card.jpg`}
                  />
                  <PaymentCard
                     img={`${process.env.PUBLIC_URL}/imgs/payment/paypal.jpg`}
                  />
                  <PaymentCard
                     img={`${process.env.PUBLIC_URL}/imgs/payment/skrill.jpg`}
                  />
                  <PaymentCard
                     img={`${process.env.PUBLIC_URL}/imgs/payment/master-card2.jpg`}
                  />
                  <PaymentCard
                     img={`${process.env.PUBLIC_URL}/imgs/payment/visa2.jpg`}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
