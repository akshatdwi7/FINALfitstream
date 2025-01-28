import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GoLive from './pages/GoLive';
import JoinStream from './pages/JoinStream';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/go-live" element={<GoLive />} />
            <Route path="/join" element={<JoinStream />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;