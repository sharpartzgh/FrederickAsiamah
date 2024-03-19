import React from 'react'
import fred from '../../assets/fred-lg.png'
import GetInTouch from '../REUSEABLE/GetInTouch'

const Hero = () => {
  return (
    <div className="text-white mt-5 lg:flex lg:items-center ">
        <div className="text w-full">
          <p className=" lg:text-[50px] block">Nice to meet You! I'am</p>
          <h1 className="lg:text-[55px] xl:text-[70px] xl:font-black block ">FREDERICK ASIAMAH</h1>
          <p className="lg:text-[25px] lg:w-[445px]"> Based in Ghana, I’m a front-end developer passionate about building things for the web that users love.</p>
          <GetInTouch text="GET IN TOUCH"/>
        </div>
        {/* for mobile and tablets */}
        {/* for large screens */}
        <div className="image hidden w-full lg:contents">
          <img src={fred} alt="fred's-picture" className="lg:w-[349px] lg:h-[345px] xl:w-[449px] xl:h-[545px]" />
        </div>
    </div>
  )
}

export default Hero