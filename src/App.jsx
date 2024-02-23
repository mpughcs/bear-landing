import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import { BlogProvider } from '../context/BlogContext';
// Adjust the import path as needed
import NavBar from './components/Navbar';
import BlogOverview from './pages/BlogOverview';
import Home from './pages/Home';

function App() {
  const handleAboutPressed = () => {
    if (window.location.pathname === '') {
      // aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      // Placeholder for your scroll logic
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div>
      <main className="overflow-hidden duration-20 transition-all select-none">
        <NavBar handleAboutPressed={handleAboutPressed} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={
              <BlogProvider>
                <BlogOverview />
              </BlogProvider>
            } />
          </Routes>
        </Router>
        <Footer />
      </main>
    </div>
  );
}

export default App;
