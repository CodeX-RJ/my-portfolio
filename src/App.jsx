import { useEffect, useState } from "react"
import Header from "./sections/Header"
import HeroSection from "./sections/HeroSection"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Education from "./sections/Education"

export default function App() {

  return (
    <>
    <Header/>  
    <HeroSection/>
    <About/>
    <Skills/>
    <Education/>
    </>
  )
}