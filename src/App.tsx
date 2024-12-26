
import './App.css'
import About from './components/About'
import Contact from './components/Contact'

import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Story from './components/Story'
import UpcomingTitleAnnouncements from './components/Upcoming'

function App() {
  

  return (
   
      <main  >
       <Hero/>
       <Story/>
       <Features/>
       
       <About/>
       <Contact/>

       <UpcomingTitleAnnouncements/>
       <Footer/>
       
      </main>
   
  )
}

export default App
