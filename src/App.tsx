import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cources from './pages/Cources'

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cources" element={<Cources />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}
