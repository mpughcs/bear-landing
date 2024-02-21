import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BlogOverview from './pages/BlogOverview';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/Navbar';


function App() {

  // const location = useLocation();
  const handleAboutPressed = () => {
    // if we are on the home page, scroll to the about section
    // if we are on blog page, navigate to the home page
    if (window.location.pathname === '/') {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      window.location.href = '/';
    }
  };


  return (
    <div className=''>
      <main className="overflow-hidden duration-20 transition-all select-none">
        <NavBar handleAboutPressed={handleAboutPressed} />
        <AnimatePresence >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/blog" element={<BlogOverview />} />
            </Routes>
          </Router >
        </AnimatePresence>
      </main>
    </div >

  )
}

export default App
