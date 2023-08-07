import { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home/>
        }
        if (currentPage === 'About') {
            return <About/>
        }
        if (currentPage === 'Navigation') {
            return <Navigation/>
        }
        if (currentPage === 'Project') {
            return <Project/>
        }
        if (currentPage === 'Contact') {
            return <Contact/>
        }
        return <Footer/>
    
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
 <div>
<Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
<main className="mx-3">{renderPage()}</main>
</div>
    
    )
    }
