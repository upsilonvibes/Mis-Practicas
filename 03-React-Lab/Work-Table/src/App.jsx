import React from 'react';
import './app.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import Charts from './pages/Charts';

function App(){
    
    return(
        <Router>
        <div className="neon-app-container">
{/* The Navbar stays visible on all routes */}
        <Navbar />
        
        {/* The Routes block acts as the dynamic window that swaps pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
        
        {/* The Footer stays visible on all routes */}
        <Footer />
    </div>
    </Router>
    )
}
export default App;