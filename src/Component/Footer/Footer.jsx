import React from 'react'
import line from '../../assets/Line.png'
import {  FaGithub } from "react-icons/fa";
import { FaXTwitter,  FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-2 md:flex-row md:justify-between py-10'>
      <div className="socials flex gap-3">
      <Link to="https://www.github.com/sharpartzgh"><FaGithub  className=' w-[24px] h-[24px]'/></Link>
      <Link to="https://www.twitter.com/ApentengAsiamah"><FaXTwitter className=' w-[24px] h-[24px]'/></Link>
      <Link to="https://www.linkedin.com/in/frederick-asiamah"><FaLinkedinIn className=' w-[24px] h-[24px]'/></Link> 
      </div>
      <div className="email flex justify-end items-center gap-2" >
      <a href="mailto:EMAIL">frederickasiamah@outlook.com</a>
      <img src={line} alt="line" className='hidden md:flex h-[1px] w-32'/>
      </div>
    </div>
  )
}

export default Footer