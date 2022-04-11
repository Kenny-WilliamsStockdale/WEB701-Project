/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
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
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
