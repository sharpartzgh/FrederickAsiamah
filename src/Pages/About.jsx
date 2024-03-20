import React from 'react'

const About = () => {
  return (
    <div className="about__wrapper flex flex-col lg:flex-row lg:gap-[80px] items-center">
      <div className=" leading-[80px] tracking-[15px] sm:tracking-[25px] flex text-center justify-center lg:flex-col lg:items-start mt-10 ">
        <p className="">A</p>
        <p className="">B</p>
        <p className="">O</p>
        <p className="">U</p>
        <p className="">T</p>
      </div>
      <div className="about__info border-2 py-2 px-3 lg:mt-10">
          <p>I am a dedicated Front-End Architect with a passion for crafting immersive digital experiences. Proficient in HTML, CSS, JavaScript, and React, I specialize in driving user engagement, optimizing performance, and staying at the forefront of industry trends.
          <br/>
          <hr className='my-2 border-[#196895]'/>
          <span className=" text-[#196895] mr-3 text-[18px] hover:bg-[#60BCD0] hover:py-2 hover:px-3 hover:text-white">Skills & Expertise:</span>

          I am proficient in HTML, CSS, JavaScript, React, and various design tools. I excel at crafting responsive web experiences that seamlessly adapt to all devices. Always passionate about staying ahead of the curve, I thrive on exploring new technologies and trends to deliver cutting-edge solutions.

          <br/>
          <hr className='my-2 border-[#196895]'/>
          <span className=" text-[#196895] mr-3 text-[18px] hover:bg-[#60BCD0] hover:py-2 hover:px-3 hover:text-white">What I'm Looking For:</span>

          I am seeking opportunities to collaborate with forward-thinking teams and companies on projects that allow me to leverage my skills and creativity for meaningful impact. Whether it's optimizing existing systems or developing innovative solutions from scratch, I am eager to contribute to projects that push boundaries and deliver exceptional results.
        
          <br/>
          <hr className='my-2 border-[#196895]'/>
          <span className=" text-[#196895] mr-3 text-[18px] hover:bg-[#60BCD0] hover:py-2 hover:px-3 hover:text-white">🤝 Lets Connect:</span> 

          Let's connect and explore how I can help you build engaging, high-performing web applications that deliver tangible results. I look forward to discussing potential collaborations and making a positive impact together.
        </p>
      </div>
    </div>
  )
}

export default About