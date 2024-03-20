import React from 'react'


const ProjectsPortfolio = ({imageUrl, text, lang}) => {
 
  return (
    <div>
        <div className="Portfolio__wrapper  font-SpaceGrotest w-full relative">
            <picture>
                <img src={imageUrl} alt="image" className="w-[345px] h-[253px] md:w-[345px] md:h-[253px] lg:h-[400px] lg:w-[540px] " />
            </picture>
        </div>
        <div className="  text-white">
            <p className=" mt-4 text-[16px]">{text}</p>
            <p className=" mt-2 text-[12px] text-[#D9D9D9]">{lang}</p>
        </div>
    </div>
  )
}

export default ProjectsPortfolio