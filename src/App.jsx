import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import drop from "../src/assets/drop.png"


function App() {

  return (
    <body className='mx-auto px-20 bg-black min-h-screen text-white'>
      <div className="content__wrapper container ">
        <Header/>
          <div className="image hidden absolute sm:flex sm:left-[230px] sm:top-[50px] md:left-[300px] md:top-[100px] lg:hidden ">
            <img src={drop} alt="drop"/>
          </div>
          <div className="image hidden lg:flex absolute lg:left-[460px] lg:top-[240px] xl:left-[640px] xl:top-[140px]">
            <img src={drop} alt="drop" />
          </div>
        <Hero/>
      </div>
    </body>
  )
}

export default App
