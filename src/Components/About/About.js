import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

function About() {

    const [isAbout1, setIsAbout1] = useState(true)

  return (
    <section id='about' className=' bg-about pt-[50px] pb-5 md:pt-[70px] md:pb-10 lg:pt-24 lg:pb-[70px] text-white'>
        <div className="container">
            {/* about top */}
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center'>
                {/* image */}
                <div className='lg:w-[456px] xl:w-[546px] 2xl:w-[640px] shrink-0 px-3'>
                    <img src="./imgs/about-house-bg.png" alt="about-house"/>
                </div>
                {/* content */}
                <div className='pr-[30px] mt-8 lg:max-w-[606px]'>
                    {/* section heading */}
                    <div>
                        <SectionHeading title="ما کاملا از شما حمایت می کنیم و خدمات می دهیم" subTitle="درباره ما" center={false} />
                        <p className='font-Dana-med text-sm md:text-base/7 mt-[18px]'>
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
                        </p>
                    </div>
                    {/* about navtab */}
                    <div className='mt-6'>
                        <div className='my-0 flex border-b border-gray-400'>
                            <span href='#' className={`${isAbout1 && "border-b-2 border-emerald-600"} w-24 flex-center pb-5 hover:border-b-[3px] hover:border-emerald-600 cursor-pointer transition-all`} 
                            onClick={() => setIsAbout1(true)}
                            >ماموریت ما
                            </span>
                            <span href='#' className={`${!isAbout1 && "border-b-2 border-emerald-600"} w-24 flex-center pb-5 hover:border-b-[3px] hover:border-emerald-600 cursor-pointer transition-all`} 
                            onClick={() => setIsAbout1(false)}
                            >دیدگاه ما
                            </span>
                        </div>
                        <div className='mt-5'>
                            {isAbout1 ? (
                                <>
                                    <p className='text-sm/7 md:text-base/7 mb-4'>
                                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
                                    </p>
                                    <a href="#" className='font-Dana-med inline-block mt-3 py-2 px-4 bg-emerald-400 rounded-lg hover:bg-white hover:text-emerald-400 transition-colors'>بیشتر بدانید</a>
                                </>
                            ) : (
                                <div className='space-y-4'>
                                <div className='flex items-center gap-x-1'>
                                    <svg className='size-5 text-emerald-500'>
                                        <use href="#chevron-double-left-mini"></use>
                                    </svg>
                                    <span> احترام به همه مردم</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <svg className='size-5 text-emerald-500'>
                                        <use href="#chevron-double-left-mini"></use>
                                    </svg>
                                    <span>عالی در هر کاری که انجام می دهیم</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <svg className='size-5 text-emerald-500'>
                                        <use href="#chevron-double-left-mini"></use>
                                    </svg>
                                    <span>صداقت در تجارت ما</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <svg className='size-5 text-emerald-500'>
                                        <use href="#chevron-double-left-mini"></use>
                                    </svg>
                                    <span>اعتبار و جلب رضایت اکثر مردم</span>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* about bottom */}
            <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 mt-12 md:mt-[70px] lg:mt-24">
                <div className='group flex items-center gap-x-3 my-5'>
                    <div className='flex-center text-gray-200 bg-emerald-900 group-hover:bg-emerald-500 transition-colors p-2.5 rounded-full'>
                        <svg className='size-7'>
                            <use href='#clock'></use>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <span>دوشنبه تا جمعه</span>
                        <span>8 صبح تا 9 شب</span>
                    </div>
                </div>
                <div className='group flex items-center gap-x-3 my-5'>
                    <div className='flex-center text-gray-200 bg-emerald-900 group-hover:bg-emerald-500 transition-colors p-2.5 rounded-full'>
                        <svg className='size-7'>
                            <use href='#user-circle-solid'></use>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <span>تماس با ما</span>
                        <span className='cursor-pointer hover:text-emerald-500 transition-colors'>info@pento.com</span>
                    </div>
                </div>
                <div className='group flex items-center gap-x-3 my-5'>
                    <div className='flex-center text-gray-200 bg-emerald-900 group-hover:bg-emerald-500 transition-colors p-2.5 rounded-full'>
                        <svg className='size-7'>
                            <use href='#phone'></use>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <span>24 ساعت / 7 روز</span>
                        <span>+4 234-543 123 678</span>
                    </div>
                </div>
                <div className='group flex items-center gap-x-3 my-5'>
                    <div className='flex-center text-gray-200 bg-emerald-900 group-hover:bg-emerald-500 transition-colors p-2.5 rounded-full'>
                        <svg className='size-7'>
                            <use href='#earth-solid'></use>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <span>مجموعه تجاری 275</span>
                        <span>ایران، استان تهران، خیابان اصلی</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About