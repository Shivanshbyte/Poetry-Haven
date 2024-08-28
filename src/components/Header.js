import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Add your own logo here */}
        <h1>Poetry Haven</h1>
      </div>
      <nav className="nav-buttons">
        <button className="login-btn">Log In</button>
        <button className="create-account-btn">Create Account</button>
      </nav>
    </header>
  );
}

export default Header;
