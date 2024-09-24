import React from 'react'
import SectionHeading from "../SectionHeading/SectionHeading"

function Quote() {
  return (
    <div className='relative bg-emerald-500 text-white z-10 pt-5 md:py-[50px] xl:pt-5 xl:pb-0'>
        {/* shape 1 */}
        <div className='absolute bottom-0 right-0 w-[250px] opacity-50 -z-10 hidden lg:block'>
            <img src="./imgs/shape-1.png" alt="shape" />
        </div>
        {/* shape 2 */}
        <div className='absolute top-5 left-10 -z-10 hidden lg:block'>
            <img src="./imgs/shape-2.png" alt="shape" />
        </div>
        <div className='container'>
            <div className='flex flex-col gap-y-6 items-start justify-center md:flex-row md:items-center  pt-5'>
                <div className='px-3'>
                    <SectionHeading title="اگر شک دارید، قیمت وام مسکن را دریافت کنید" subTitle="دریافت یک نقل قول" center={false} white />
                    <div className='flex gap-x-8 text-sm lg:text-base child:transition-colors mt-6'>
                        <a href="#" className='py-3 px-4 lg:py-4 lg:px-6 rounded-md bg-about hover:text-emerald-500 hover:bg-white'>به انجمن بپیوندید</a>
                        <a href="#" className='py-3 px-4 lg:py-4 lg:px-8 rounded-md bg-white text-emerald-500 hover:bg-about hover:text-white'>دریافت اطلاعات</a>
                    </div>
                </div>
                <div className='px-3'>
                    <img className='md:w-[90%] lg:w-full' src="./imgs/quote-img.png" alt="quote-img" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Quote