import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cources from './components/pages/Cources';
import Contact from './components/pages/Contact';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/course" element={<div>Course Page</div>} />
      </Routes>
      <Footer />
    </Router>
  )
}
