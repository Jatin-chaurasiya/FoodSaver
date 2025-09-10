import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="main-header">
      <div className="logo-group">
        <div className="logo-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="logo-text">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Annomitro
          </Link>
        </h2>
      </div>
      <div className="nav-and-cta">
        <nav className="main-nav">
          <Link className={`nav-link ${isActive('/about')}`} to="/about">
            About
          </Link>
          <Link className={`nav-link ${isActive('/works')}`} to="/works">
            How it Works
          </Link>
          <Link className={`nav-link ${isActive('/restaurant')}`} to="/restaurant">
            For Restaurants
          </Link>
          <Link className={`nav-link ${isActive('/ngo')}`} to="/ngo">
            For NGOs
          </Link>
        </nav>
        <Link to="/registration" className="cta-button">
          <span className="cta-text">Get Started</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
