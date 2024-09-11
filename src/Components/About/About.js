import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

function About() {
  return (
    <section id='about' className=' bg-about pt-[50px] pb-5 md:pt-[70px] md:pb-10 lg:pt-24 lg:pb-[70px] text-white h-[800px]'>
        <div className="container">
            <div className='flex flex-col lg:flex-row lg:items-center'>
                <div className='lg:w-[456px] xl:w-[546px] 2xl:w-[640px] shrink-0 px-3'>
                    <img src="./imgs/about-house-bg.png" alt="about-house"/>
                </div>
                <div className='pr-[30px]'>
                    <SectionHeading title="ما کاملا از شما حمایت می کنیم و خدمات می دهیم" subTitle="درباره ما" center={false} />
                    <p className='mt-[18px] leading-7'>
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default About