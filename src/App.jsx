import { useState } from 'react'
import './App.css';
import './index.css';
import Home from "./routes/home"
import About from "./routes/about"
import Project from "./routes/projects"
import Contact from "./routes/contact"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
