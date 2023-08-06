import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Headers'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from  './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <div>
    <Route path= "/" component={Home}/>
    <Route path="/headers" component={Header}/>,
    <Route path= "/about" component={About}/>,
    <Route path ="/project" component={Project}/>,
    <Route path ="/contact" component={Contact}/>,
    <Footer/>
    </div>
  </Router>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
