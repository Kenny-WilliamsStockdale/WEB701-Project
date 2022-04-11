// ------ ANCHOR IMPORT SECTION ------
// import pages/screens
import React from 'react'
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/landingPage/landingPage";
import LoginPage from "./screens/loginPage/loginPage";
import SignupPage from "./screens/signupPage/signupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ------ ANCHOR SETUP SCREEN SECTION ------
// screen layout including routes/navigation to all pages
const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;