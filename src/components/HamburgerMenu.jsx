import { useEffect, useState } from 'react';
import './HamburgerMenu.css';
import '../styles/force-hamburger-position.css';

const HamburgerMenu = ({ isOpen, onToggle, isMobile }) => {
  console.log('HamburgerMenu render:', { isOpen, isMobile, onToggle: !!onToggle });
  
  // Keep hamburger in top-left for ease of use
  return (
    <div 
      className={`hamburger-menu hamburger-menu-force-position ${isOpen ? 'open' : 'closed'}`}
      onClick={onToggle}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </div>
  );
};

export default HamburgerMenu;
