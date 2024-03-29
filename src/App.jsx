import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { BlogProvider } from '../context/BlogContext';
import Footer from './components/Footer';
// Adjust the import path as needed
import NavBar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import BlogOverview from './pages/BlogOverview';
import Home from './pages/Home';

// TODO: 


function App() {
  const [focusFooterEntry, setFocusFooterEntry] = useState(false);

  // Function to handle when the user clicks "Get Notified"
  const handleGetNotified = () => {
    setFocusFooterEntry(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
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
        <Helmet>
          <meta name="description" content="Never miss a special ocassion again. Add events, set reminders, and purchase gifts all in one place." />
          <meta name="keywords" content="Calendar, Events, Reminders, Gift, Gift with Bear" />
          <title>Bear</title>
        </Helmet>
        <NavBar handleAboutPressed={handleAboutPressed} />
        <Router>
          <Routes>
            <Route path="/" element={<Home handleGetNotified={handleGetNotified} />} />
            <Route path="/blog" element={
              <BlogProvider>
                <BlogOverview />
              </BlogProvider>
            } />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
        <Footer focusEntry={focusFooterEntry} />
      </main>
    </div >
  );
}

export default App;
