import { useState , useEffect} from 'react'
import './portfolio.css'


import Navbar from"./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
    <Navbar scrolled={scrolled}/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
