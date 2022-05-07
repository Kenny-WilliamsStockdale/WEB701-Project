/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AccountEdit from './pages/AccountEdit';
import Account from './pages/Account';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/CartComponent';
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
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/AccountEdit" element={<AccountEdit />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
