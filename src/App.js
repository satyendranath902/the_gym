// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Gallary from './components/Gallary';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/gallary" element={<Gallary/>} />
        <Route element={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
