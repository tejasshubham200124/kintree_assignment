import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Paintings from './components/Paintings'
import MentorsSection from './components/MentorSection'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'

function App() {
  return (
    <div
    className='main-container'>
      <Header />
      <Banner />
      <AboutUs />
      <Paintings />
      <MentorsSection />
      <Testimonials />
      <Navbar />
    </div>
  )
}

export default App