import { useState } from 'react'
import './App.css'
import Header from './components/section/Header/Header'
import HeroSection from './components/section/HeroSection/HeroSection'
import ServicesSection from './components/section/ServicesSection/ServicesSection'
import FirstConsultation from './components/main/FirstСonsultation/FirstConsultation'
import AboutMe from './components/section/AboutMeSection/AboutMe'
import EducationSection from './components/section/EducationSection/EducationSection'
import OnlineСourse from './components/main/onlineСourse/onlineСourse'
import Science from './components/section/Science/Science'
import Review from './components/section/Reviews/Reviews'
import Footer from './components/Footer/Footer'
import UploadForm from './components/uploadForm/uploadForm'



function App() {


  return (
    <>
    <div className='container'>
        <div className='body-fone'>
          < Header />
          <main>
            < HeroSection />
            <OnlineСourse />
          
            < ServicesSection />
            <FirstConsultation />
            < AboutMe />
            < EducationSection />
            < Science />
            < Review />
            < UploadForm />
          </main>        
        
        </div>
    </div>
    < Footer />
    </>
  )
}

export default App
