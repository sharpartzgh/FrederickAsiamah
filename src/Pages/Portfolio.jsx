import React from 'react'
import Projects from '../Component/Projects/Projects'

const Portfolio = () => {
  return (
    <div className=" flex flex-col items-center lg:flex-row w-full">
      <div className=" leading-[80px] tracking-[15px] sm:tracking-[25px] flex text-center justify-center lg:flex-col lg:items-start mt-10 ">
        <p className="">P</p>
        <p className="">O</p>
        <p className="">R</p>
        <p className="">T</p>
        <p className="">F</p>
        <p className="">O</p>
        <p className="">L</p>
        <p className="">I</p>
        <p className="">O</p>
      </div>
      <div className="projects lg:my-10 w-full">
        <Projects/>
      </div>
    </div>
  )
}

export default Portfolio