import React from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import About from './Pages/About'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'

function App() {

  return (
    <body className=' mx-auto px-20 bg-black text-white'>
      <Header/>
        <Routes>
          <Route path='/' element={ <Homepage/> }/>
          <Route path='/About' element={ <About/> }/>
          <Route path='/Portfolio' element={ <Portfolio/> }/>
          <Route path='/Resume' element={ <Resume/> }/>
        </Routes>
      <hr className=' mt-10'/>
      <Footer/>
    </body>
  )
}

export default App
