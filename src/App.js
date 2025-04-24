import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Generate from './pages/Generate';
import ViewNPCs from './pages/ViewNPCs';
import MyNPCs from "./pages/MyNPCs";

// Inside your <Routes>



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/my-npcs" element={<MyNPCs />} />
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/view" element={<ViewNPCs />} />
      </Routes>
    </Router>
  );
}

export default App;
