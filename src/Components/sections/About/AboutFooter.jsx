import AboutFooterItem from "./AboutFooterItem";

function AboutFooter() {
   return (
      <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 mt-12 md:mt-[70px] lg:mt-24">
         <AboutFooterItem
            text1="دوشنبه تا جمعه"
            text2="8 صبح تا 8 شب"
            svg="clock"
         />
         <AboutFooterItem
            text1="تماس با ما"
            text2="info@pento.com"
            svg="user-circle-solid"
         />
         <AboutFooterItem
            text1="24 ساعت / 7 روز"
            text2="+4 234-543 123 678"
            svg="phone"
         />
         <AboutFooterItem
            text1="مجموعه تجاری 275"
            text2="ایران، استان تهران، خیابان اصلی"
            svg="earth-solid"
         />
      </div>
   );
}

export default AboutFooter;
