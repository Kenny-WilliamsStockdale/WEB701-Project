/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Product from './pages/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
