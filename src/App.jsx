import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {









  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home></Home>

        } />

        <Route path="/blog" element={<h1>About</h1>} />
      </Routes>

    </Router >

  )
}

export default App
