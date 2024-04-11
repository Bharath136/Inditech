import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Multiplayer from './components/Multiplayer';
import Campain from './components/Campain';
import Soldier from './components/Soldier';
import Store from './components/Store';
import More from './components/More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/multiplayer" element={<Multiplayer />} />
            <Route path="/campain" element={<Campain />} />
            <Route path="/soldier" element={<Soldier />} />
            <Route path="/store" element={<Store />} />
            <Route path="/more" element={<More />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
