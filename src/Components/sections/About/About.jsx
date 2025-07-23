import SectionHeading from '../../SectionHeading/SectionHeading'
import AboutFooter from './AboutFooter'
import AboutNav from './AboutNav'

function About() {


  return (
    <section id='about' className=' bg-about pt-[50px] pb-5 md:pt-[70px] md:pb-10 lg:pt-24 lg:pb-[70px] text-white'>
        <div className="container">
            {/* about top */}
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center'>
                <div className='lg:w-[456px] xl:w-[546px] 2xl:w-[640px] shrink-0 px-3'>
                    <img src={`${process.env.PUBLIC_URL}/imgs/about-house-bg.png`} alt="about-house"/>
                </div>
                <div className='pr-[30px] mt-8 lg:max-w-[606px]'>
                    <div>
                        <SectionHeading title="ما کاملا از شما حمایت می کنیم و خدمات می دهیم" subTitle="درباره ما" center={false} />
                        <p className='font-Dana-med text-sm md:text-base/7 mt-[18px]'>
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. استاندارد صنعت است.
                        </p>
                    </div>
                    <AboutNav />
                </div>
            </div>
            {/* about bottom */}
            <AboutFooter />
        </div>
    </section>
  )
}

export default About