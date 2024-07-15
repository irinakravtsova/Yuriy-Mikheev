import { useState } from 'react'
import './App.css'
import Header from './components/section/Header/Header'
import HeroSection from './components/section/HeroSection/HeroSection'
import ServicesSection from './components/section/ServicesSection/ServicesSection'
import FirstConsultation from './components/main/FirstСonsultation/FirstConsultation'
import AboutMe from './components/section/AboutMeSection/AboutMe'
import EducationSection from './components/section/EducationSection/EducationSection'



function App() {


  return (
    <div className='container'>
        <div className='body-fone'>
          < Header />
          <main>
          < HeroSection />
          <FirstConsultation />
          < ServicesSection />
          <FirstConsultation />
          < AboutMe />
          < EducationSection />
       

          </main>
        
        </div>
    </div>

  )
}

export default App
