import React, { useEffect, useState } from 'react';
import logo from '../../assets/ufs.png';
import icon1 from '../../assets/phone-solid.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ activeNavItem }) => {
  const [fix, setFix] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary ${fix ? 'fixed-top' : ''} p-0`}>
      <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src={logo} alt="logo" width="160" height="auto" />
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link
            to="/"
            className={`nav-item nav-link ${activeNavItem === 'Home' ? 'active' : ''}`}
            onClick={handleItemClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-item nav-link ${activeNavItem === 'About' ? 'active' : ''}`}
            onClick={handleItemClick}
          >
            About
          </Link>
          <Link
            to="/service"
            className={`nav-item nav-link ${activeNavItem === 'Services' ? 'active' : ''}`}
            onClick={handleItemClick}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`nav-item nav-link ${activeNavItem === 'Contact' ? 'active' : ''}`}
            onClick={handleItemClick}
          >
            Contact
          </Link>
        </div>
        <h5 className="m-0 pe-lg-5 d-none d-lg-block">
          <img src={icon1} alt="logo" width="20" height="auto" className="nav-icon" />
          00971-4-2507076
        </h5>
      </div>
    </nav>
  );
};

export default Navbar;
