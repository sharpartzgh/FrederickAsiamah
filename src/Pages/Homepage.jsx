import React from 'react'
import Hero from '../Component/Hero/Hero'
import drop from "../assets/drop.png"

const Hompage = () => {
  return (
    <div>
      <div className="content__wrapper container ">
        <hr  className=' lg:mb-10'/>
          <div className="image hidden absolute sm:flex sm:left-[230px] sm:top-[50px] md:left-[300px] md:top-[100px] lg:hidden ">
            <img src={drop} alt="drop"/>
          </div>
          <div className="image hidden lg:flex absolute lg:left-[460px] lg:top-[240px] xl:left-[640px] xl:top-[140px]">
            <img src={drop} alt="drop" />
          </div>
        <Hero/>
      </div>
    </div>
  )
}

export default Hompage