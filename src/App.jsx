import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "light"}>
    <Navbar darkMode= {darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    <Footer/>
</div>
  )
}

export default App