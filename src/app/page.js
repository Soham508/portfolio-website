import Image from 'next/image'
import Head from 'next/head'
import Navbar from './components/navbar'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/skills'
import Contact from './components/contact'

export default function Home() {
  return (
    <div> 
      
      <Navbar />
      <Main />
      <About />
      <Skills/>
      <Contact/>

    </div>
    
  )
}
