import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path if necessary

function Header() {
  const [showNav, setShowNav] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${showNav ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="logo-container">
        <img src={logo} alt="Poetry Haven Logo" className="logo" />
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
