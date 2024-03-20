import React from 'react'

const CV = () => {
  return (
    <div className=" w-full select-none">
      <div className="text-center text-[24px] lg:text-[40px]">
        <h1>FREDERICK ASIAMAH APENTENG</h1>
        <hr className='my-2 border-[#196895]'/>
        <p className="text-center text-[18px] lg:text-[25px]" >Accra, Ghana | +233 542998849</p>
      </div>
      <div className="text-[20px] lg:text-[25px] Projects text-center mt-10">
        <h1>Projects</h1>
        <hr className='my-2 border-[#196895]'/>
      </div>
      <div className="projects__wrapper">
        <div className="DevFinder my-4">
          <h1 className=' lg:text-[25px]'>Devfinder Web App | React.js, Tailwind, GithubApi | <span className=' text-[#60BCD0] mr-2 underline'><a href='https://github.com/sharpartzgh/devFinder-App'>Github</a></span>|<span className=' text-[#60BCD0] ml-2 underline'><a href='https://sharpartz-devfinder-app.netlify.app/'>Demo Link</a></span> </h1>
          <ul className=" lg:text-[18px] ml-4 my-3">
            <li>●	Engineered a single-page web app in 2 weeks to advance accessibility to developer’s information on GitHub.</li>
            <li>●	Designed a toggle feature to enabled users to switch between dark and light mode, fostering a more personalized browsing experience.</li>
            <li>●	Leveraged an API for the search input field, facilitating efficient user search and contributing to a 20% boost in accessibility.</li>
          </ul>
        </div>
        <div className="Country my-4">
          <h1 className=' lg:text-[25px]'>Rest Countries Web App | React.js, Tailwind, Rest CountriesApi | <span className=' text-[#60BCD0] mr-2 underline'><a href='https://github.com/sharpartzgh/Country-App'>Github</a></span>|<span className=' text-[#60BCD0] ml-2 underline'><a href='https://sharpartz-countryapp.netlify.app/'>Demo Link</a></span>  </h1>
          <ul className=" lg:text-[18px] ml-4 my-3">
            <li>●	Developed a 2-page app offering a user-friendly platform to explore global country information.</li>
            <li>●	Deployed valuable insights into geographical, demographic, and cultural data, enhancing accessibility by 30%.</li>
            <li>●	Created a dark theme toggle for improved learner comfort, accessibility, and user preference.</li>
          </ul>
        </div>
        <div className="Audiophile my-4">
          <h1 className=' lg:text-[25px]'>Audiophile E-Commerce Web App | React.js, Tailwind, AudiophileApi  <span className=' text-[#60BCD0] mr-2 underline'><a href='https://github.com/sharpartzgh/Audiophile-E-Shop/'>Github</a></span>|<span className=' text-[#60BCD0] ml-2 underline'><a href='https://audiophile-e-shop.vercel.app/'>Demo Link</a></span>  </h1>
          <ul className=" lg:text-[18px] ml-4 my-3">
            <li>	●	Developed a 6-page app for customers to access information on audiophile products and make purchases.</li>
            <li>●	Enhanced the shopping experience, which boosted sales by 15% and led to customer satisfaction.</li>
          </ul>
        </div>
        <div className="To-Do my-4">
          <h1 className=' lg:text-[25px]'>To-do App | React.js, Tailwind | React.js <span className=' text-[#60BCD0] mr-2 underline'><a href='https://github.com/sharpartzgh/Todo-App'>Github</a></span>|<span className=' text-[#60BCD0] ml-2 underline'><a href='https://sharpartz-todo-app.netlify.app/'>Demo Link</a></span>  </h1>
          <ul className=" lg:text-[18px] ml-4 my-3">
            <li>	●	Designed a responsive 1-page To-do list app utilizing React.js demonstrating proficiency in state management and UI development.</li>
            <li>●	Integrated dark and light mode options, enhancing user comfort and accessibility.</li>
            <li>●	Deployed a JavaScript function to aid users to add, remove, mark items as completed, and filter completed tasks for a more streamlined experience</li>
          </ul>
        </div>
        <div className="T-Mart my-4">
          <h1 className=' lg:text-[25px]'>TMART E-Commerce App | HTML, CSS | <span className=' text-[#60BCD0] mr-2 underline'><a href='https://github.com/sharpartzgh/T-MART'>Github</a></span>|<span className=' text-[#60BCD0] ml-2 underline'><a href='https://sharpartzgh.github.io/Project-C4-Group3'>Demo Link</a></span>  </h1>
          <ul className=" lg:text-[18px] ml-4 my-3">
            <li>	●	Streamlined user experience for TMART customers through a visually appealing and responsive single page e-commerce website using HTML and CSS</li>
          </ul>
        </div>
      </div>
      <div className="text-[20px] lg:text-[30px] Projects text-center mt-10">
        <h1>Professional Skills</h1>
        <hr className='my-2 border-[#196895]'/>
      </div>
      <div className="skillset">
        <ul className='lg:text-[18px] ml-4 my-3 grid gap-2 md:grid-cols-3'>
          <li>•	  HTML</li>
          <li>•	 CSS (CSS Frameworks)</li>
          <li>•	  JavaScript </li>
          <li>•	 React.js</li>
          <li>•	 Version Control Systems ( such as Git and GitHub )</li>
          <li>•	 Responsive Design</li>
          <li>•	  Design</li>
        </ul>
      </div>
      <div className="text-[20px] lg:text-[30px] Projects text-center mt-10">
        <h1>Education</h1>
        <hr className='my-2 border-[#196895]'/>
      </div>
      {/* Education */}
      <div className="edu__wrapper my-10 flex flex-col md:flex-row md:justify-between">
        <div className="school">
          <h1 className="text-[15px] lg:text-[25px]"><span className="text-[#60BCD0]">Professional Certificate:</span> Front-End Development </h1>
          <p className="lg:text-[18px]">Azubi Africa Front-End Development Program</p>
        </div>
        <div className="duration">
        <h1 className="md:text-[20px] lg:text-[25px] text-[#60BCD0] ">01/06/2023 to 04/04/2024</h1>
        <p className=" md:text-end lg:text-[18px]">Virtual  <br />Accra</p>
        </div>
      </div>
      <div className="edu__wrapper my-10 flex flex-col md:flex-row md:justify-between">
        <div className="school">
          <h1 className="text-[15px] lg:text-[25px]"><span className="text-[#60BCD0]">Professional Certificate:</span> Version Control Systems </h1>
          <p className="lg:text-[18px]">Cousera | <a href='https://coursera.org/share/7eff20ebe229f3b35671d0d368f0912c' target='_blank'  className='underline'>Show Credentials </a></p>
        </div>
        <div className="duration">
        <h1 className="md:text-[20px] lg:text-[25px] text-[#60BCD0]">09 /10/ 2023</h1>
        <p className=" md:text-end lg:text-[18px]">Virtual <br />Accra</p>
        </div>
      </div>
      <div className="edu__wrapper my-10 flex flex-col md:flex-row md:justify-between">
        <div className="school">
          <h1 className="text-[15px] lg:text-[25px]"><span className="text-[#60BCD0]">Professional Certificate:</span> Command Line in Linux </h1>
          <p className="lg:text-[18px]">Cousera | <a href='https://www.coursera.org/account/accomplishments/certificate/G7RRSMNUD9UA' target='_blank' className=' underline'>Show Credentials </a></p>
        </div>
        <div className="duration">
        <h1 className="md:text-[20px] lg:text-[25px] text-[#60BCD0]"> 24 /06/ 2023 </h1>
        <p className=" md:text-end lg:text-[18px]">Virtual  <br />Accra</p>
        </div>
      </div>
      <div className="edu__wrapper my-10 flex flex-col md:flex-row md:justify-between">
        <div className="school">
          <h1 className="text-[15px] lg:text-[25px]"><span className=" text-[#60BCD0]">Professional Certificate:</span> Graphic Design </h1>
          <p className="lg:text-[18px]">Global Computers Institute Graphic Design Program</p>
        </div>
        <div className="duration">
        <h1 className="text-[#60BCD0] md:text-[20px] lg:text-[25px]"> 2014 to 2015 </h1>
        <p className=" md:text-end lg:text-[18px]">On-Site <br />Accra</p>
        </div>
      </div>
    </div>
  )
}

export default CV