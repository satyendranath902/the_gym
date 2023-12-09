import React from 'react';
import '.././App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav>
      <ul>
        <li className='horizontalTab'><Link to="/">Home</Link></li>
        <li className='horizontalTab'><Link to="/about">About</Link></li>
        <li className='horizontalTab'><Link to="/services">Services</Link></li>
        <li className='horizontalTab'><Link to="/contact">Contact</Link></li>
        <li className='horizontalTab'><Link to="/payment">Payment</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
