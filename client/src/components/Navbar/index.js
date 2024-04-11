import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/level-wrapper.png'
import './index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation()
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = [{ id: 1, path: '/', name: 'HOME' },
  { id: 2, path: '/multiplayer', name: 'MULTIPLAYER' },
  { id: 3, path: '/campain', name: 'CAMPAIN' },
  { id: 4, path: '/soldier', name: 'SOLDIER' },
  { id: 5, path: '/store', name: 'STORE' },
  { id: 5, path: '/more', name: 'MORE' }]
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">GAME</div> */}
      <img src={logo} className='logo' alt='logo' />
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {routes.map((route) => (
          <li><Link className={currentPath === route.path ? "nav-active" : "nav-item"} to={route.path}>{route.name}</Link></li>
        ))}
      </ul>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
