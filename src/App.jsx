import { useEffect, useState } from "react"
import Header from "./sections/Header"
import HeroSection from "./sections/HeroSection"
import About from "./sections/About"

export default function App() {

  return (
    <>
    <Header/>  
    <HeroSection/>
    <About/>
    </>
  )
}