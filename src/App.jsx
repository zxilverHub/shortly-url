import React from 'react'
import './App.css'
import { Hero, Footer, Sponsor, Statistics, Shorten, Nav } from './Index'

function App() {
  return (
    <>
        <Nav />
        <Hero />
        <div className="contents">
          <Shorten />
          <Statistics />
        </div>
        <Sponsor />
        <Footer />
    </>
  )
}

export default App