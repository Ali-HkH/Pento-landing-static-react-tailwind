import SectionHeading from "../../SectionHeading/SectionHeading";
import ContactInput from "./ContactInput";
import ContactMap from "./ContactMap";

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
                  <ContactInput name="name" label="نام" />
                  <ContactInput name="email" label="ایمیل" />
               </div>
               <div className="flex flex-col sm:flex-row gap-x-5">
                  <ContactInput name="phone" label="تلفن" />
                  <ContactInput name="topic" label="موضوع" />
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
         <ContactMap />
      </div>
   );
}

export default ContactUs;
