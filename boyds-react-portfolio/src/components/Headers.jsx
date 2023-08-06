import React from 'react';
import Navigation from './Navigation';
import '../styles/Navigation.css';

function Header() {
  return (
    <header className="header">
      <h1>Boyd Stacken's Portfolio</h1>
      <Navigation/>
    </header>
  );
}

export default Header;