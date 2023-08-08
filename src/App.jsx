
import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Headers'
import Project from './components/pages/Project'
import Footer from './components/Footer'
import Contact from  './components/pages/Contact'
import Resume from './components/pages/Resume'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)
  // const [currentPage, setCurrentPage] = useState('Home')
  return (
    <>
  <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
  </Routes>
  </Router>
  <Footer/>
    </>

  )
}
 export default App;