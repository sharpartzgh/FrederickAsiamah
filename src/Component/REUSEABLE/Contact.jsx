import React from 'react'

const Contact = ({ text }) => {
  return (
    <div>
      <h1 className=" border-b-0 lg:border-b-2 border-[#196895] text-white tracking-[1px] active:text-[#196895] mt-2 lg:mt-0 underline lg:no-underline leading-8 cursor-pointer text-[12px] md:text-[14px] font-bold">{text}</h1>
    </div>
  )
}

export default Contact