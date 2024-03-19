import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'


function App() {

  return (
    <body className='mx-auto px-20 bg-black min-h-screen text-white'>
      <div className="content__wrapper container">
        <Header/>
        <Hero/>
      </div>
    </body>
  )
}

export default App
