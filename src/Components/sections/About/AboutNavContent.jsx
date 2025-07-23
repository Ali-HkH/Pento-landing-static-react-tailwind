function AboutNavContent({ isTab1 }) {
   return (
      <div className="mt-5">
         {isTab1 ? (
            <>
               <p className="text-sm/7 md:text-base/7 mb-4">
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت
                  است. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                  استاندارد صنعت است.
               </p>
               <a
                  href="#"
                  className="font-Dana-med inline-block mt-3 py-2 px-4 bg-emerald-400 rounded-lg hover:bg-white hover:text-emerald-400 transition-colors"
               >
                  بیشتر بدانید
               </a>
            </>
         ) : (
            <div className="space-y-4">
               <div className="flex items-center gap-x-1">
                  <svg className="size-5 text-emerald-500">
                     <use href="#chevron-double-left-mini"></use>
                  </svg>
                  <span> احترام به همه مردم</span>
               </div>
               <div className="flex items-center gap-x-1">
                  <svg className="size-5 text-emerald-500">
                     <use href="#chevron-double-left-mini"></use>
                  </svg>
                  <span>عالی در هر کاری که انجام می دهیم</span>
               </div>
               <div className="flex items-center gap-x-1">
                  <svg className="size-5 text-emerald-500">
                     <use href="#chevron-double-left-mini"></use>
                  </svg>
                  <span>صداقت در تجارت ما</span>
               </div>
               <div className="flex items-center gap-x-1">
                  <svg className="size-5 text-emerald-500">
                     <use href="#chevron-double-left-mini"></use>
                  </svg>
                  <span>اعتبار و جلب رضایت اکثر مردم</span>
               </div>
            </div>
         )}
      </div>
   );
}

export default AboutNavContent;
