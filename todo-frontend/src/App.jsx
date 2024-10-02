import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
