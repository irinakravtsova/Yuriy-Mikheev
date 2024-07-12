import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/main/HeroSection/HeroSection'
import ServicesSection from './components/main/ServicesSection/ServicesSection'


function App() {


  return (
   <div className='body-fone'>
    < Header />
    <main>
     < HeroSection />
     < ServicesSection />
    </main>
   
   </div>
  )
}

export default App
