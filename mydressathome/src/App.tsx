import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VirtualTryOn from './pages/VirtualTryOn';
import AIStyleRecommendations from './pages/AIStyleRecommendations';
import Wardrobe from './pages/Wardrobe';
import SizeGuide from './pages/SizeGuide';
import Profile from './pages/Profile';
import About from './pages/About';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-tryon" element={<VirtualTryOn />} />
            <Route path="/ai-recommendations" element={<AIStyleRecommendations />} />
            <Route path="/wardrobe" element={<Wardrobe />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
};

export default App;
