import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Purchase from './pages/Purchase'; // Import correct

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Routes>
          
        </Routes>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/purchase" element={<Purchase />} /> {/* Route corrigée */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;