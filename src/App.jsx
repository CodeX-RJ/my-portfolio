import { useEffect, useState } from "react"
import Header from "./sections/Header"
import HeroSection from "./sections/HeroSection"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
export default function App() {

  return (
    <div>
    <Header/>  
    <HeroSection/>
    <About/>
    <Skills/>
    <Education/>
    <Project/>
    <Contact/>
    </div>
  )
}