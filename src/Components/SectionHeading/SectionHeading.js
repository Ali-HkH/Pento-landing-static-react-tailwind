import React from 'react'

function SectionHeading({title, subTitle, center}) {
  return (
    <div className={`${center? "text-center pb-[45px]" : "text-right"} `}>
        <span className={`${center ? "mb-3" : "mb-[18px]"} inline-block text-sm lg:text-base lg:font-Dana-med text-emerald-500`}>{subTitle}</span>
        <h1 className={`${center? "text-3xl" : "text-2xl"} lg:text-[40px]/[46px] font-Dana-bold`}>{title}</h1>
    </div>
  )
}

export default SectionHeading