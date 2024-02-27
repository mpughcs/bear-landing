// RouterWrapper.js
import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BlogProvider } from '../../context/BlogContext';
import BlogOverview from '../pages/BlogOverview';
import Home from '../pages/Home';

const RouterWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    if (location.pathname === '/') {
      aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#about');
    }
  };

  useEffect(() => {
    if (location.hash === '#about' && aboutSectionRef.current) {
      setTimeout(() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' }), 0);
    }
  }, [location]);

  return (
    <>
      {/* Your routes */}
      <Route path="/" element={<Home scrollToAboutSection={scrollToAboutSection} ref={aboutSectionRef} />} />
      <Route path="/blog" element={
        <BlogProvider>
          <BlogOverview />
        </BlogProvider>
      } />
    </>
  );
};

export default RouterWrapper;
