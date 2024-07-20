import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { TracingBeam } from '@/components/TracingBeam'

export default function Page() {
  return (
    <div className='min-h-screen bg-black'>
      <TracingBeam>
        <div className="max-w-7xl mx-auto overflow p-5"> 
          <Navbar />
          <Jumbotron />
        </div>
        <div className="max-w-7xl mx-auto overflow-hidden p-5"> 
          <Skills />
        </div>
        <div className="max-w-7xl mx-auto overflow-hidden p-5"> 
          <Projects />
        </div>
      </TracingBeam>
    </div>
  )
}