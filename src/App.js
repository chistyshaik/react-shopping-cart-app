import React, { useState, useContext } from 'react';
import './style.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import CartPage from './components/CartPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}
