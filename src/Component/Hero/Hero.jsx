import React from 'react'
import fred from '../../assets/fred-lg.png'
import fredmd from '../../assets/fred-md.png'
import GetInTouch from '../REUSEABLE/GetInTouch'

const Hero = () => {
  return (
    <div className="text-white mt-5 flex flex-col-reverse lg:flex-row lg:items-center ">
        <div className="text w-full text-center lg:text-left z-50">
          <p className=" text-[25px] my-5 md:text-[30px] lg:my-0 lg:text-[50px] block">Nice to meet You! I'am</p>
          <h1 className="text-[25px] font-black my-5 md:text-[40px] lg:text-[55px] xl:text-[70px] xl:font-black block ">FREDERICK ASIAMAH</h1>
          <p className=" md:text-[18px] md:px-20 lg:px-0 lg:text-[25px] lg:w-[445px]"> Based in Ghana, I’m a front-end developer passionate about building things for the web that users love.</p>
          <GetInTouch text="GET IN TOUCH"/>
        </div>
        {/* for mobile and tablets */}
        <div className="image w-full flex items-center mt-16 md:mt-28 justify-center lg:hidden">
          <img src={fredmd} alt="fred's-picture" className=" w-[378.59px]" />
        </div>
        {/* for large screens */}
        <div className="image hidden w-full lg:contents">
          <img src={fred} alt="fred's-picture" className="lg:w-[349px] lg:h-[345px] xl:w-[449px] xl:h-[545px]" />
        </div>
    </div>
  )
}

export default Hero