import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

function ContactUs() {
   return (
      <div
         id="contact"
         className="container-fluid lg:pl-0 flex flex-col items-center lg:flex-row lg:justify-end py-[50px] lg:py-0 bg-emerald-500 text-white"
      >
         <div className="w-full lg:w-1/2 lg:pl-10 lg:pt-16 pb-8 px-3 sm:px-8 md:px-20 lg:px-0">
            <SectionHeading
               title="با ما تماس بگیرید"
               subTitle="تماس با ما"
               white
            />
            <form action="#" className="pt-6">
               <div className="flex flex-col sm:flex-row gap-x-5">
                  <div className="w-full sm:w-1/2 flex flex-col mb-5">
                     <label htmlFor="name" className="text-sm mb-2.5">
                        نام
                     </label>
                     <input
                        id="name"
                        type="text"
                        className="px-5 py-3.5  appearance-none focus:outline-none text-zinc-800 rounded-md"
                        placeholder="نام"
                     />
                  </div>
                  <div className="w-full sm:w-1/2 flex flex-col mb-5">
                     <label htmlFor="email" className="text-sm mb-2.5">
                        ایمیل
                     </label>
                     <input
                        id="email"
                        type="email"
                        className="px-5 py-3.5 appearance-none focus:outline-none text-zinc-800 rounded-md"
                        placeholder="example@gmail.com"
                     />
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row gap-x-5">
                  <div className="w-full sm:w-1/2 flex flex-col mb-5">
                     <label htmlFor="phone" className="text-sm mb-2.5">
                        تلفن
                     </label>
                     <input
                        id="phone"
                        type="text"
                        className="px-5 py-3.5  appearance-none focus:outline-none text-zinc-800 rounded-md"
                        placeholder="09110101010"
                     />
                  </div>
                  <div className="w-full sm:w-1/2 flex flex-col mb-5">
                     <label htmlFor="topic" className="text-sm mb-2.5">
                        موضوع
                     </label>
                     <input
                        id="topic"
                        type="text"
                        className="px-5 py-3.5 appearance-none focus:outline-none text-zinc-800 rounded-md"
                        placeholder="موضوع"
                     />
                  </div>
               </div>
               <div className="flex flex-col mb-5">
                  <label htmlFor="desc" className="text-sm mb-2.5">
                     پیام
                  </label>
                  <textarea
                     className="min-h-[110px] px-5 py-3.5 appearance-none focus:outline-none rounded-md text-zinc-800"
                     name="desc"
                     rows={7}
                     cols={28}
                     id="desc"
                     placeholder="پیام شما"
                  ></textarea>
               </div>
               <button className="px-5 py-3.5 rounded-md bg-about hover:bg-white hover:text-emerald-500 transition-colors">
                  ارسال پیام
               </button>
            </form>
         </div>
         <div className="w-full lg:w-1/2">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96873.54747595973!2d-74.01503723537454!3d40.64535309481121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1644602327980!5m2!1sen!2sbd"
               className="w-full px-3 h-[500px] sm:px-8 md:px-20  md:h-[680px] lg:[790px] lg:px-0 "
            ></iframe>
         </div>
      </div>
   );
}

export default ContactUs;
