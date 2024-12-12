import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Protfolio from './component/Protfolio'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Contact from './component/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <>
     <div>
     <Navbar />
      <Home />
      <About/>
      <Protfolio/>
      <Experience/>
     <Contact/> 
      <Footer/>
     </div>
     <Toaster/>
   </>
  )
}

export default App