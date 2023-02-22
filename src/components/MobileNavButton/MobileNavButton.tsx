import React, { useState } from "react";
import './MobileNavButton.css';

const MobileNavButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMenuOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }
  return (
    <button onClick={isMenuOpen} className={isOpen && "open"}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MobileNavButton
