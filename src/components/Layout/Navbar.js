import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ notificationCount }) => {
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <i className="fas fa-receipt"></i>
          </div>
          <span>Enterprise Billing System</span>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className={isActive('/')}>
              <i className="fas fa-home"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/upload" className={isActive('/upload')}>
              <i className="fas fa-upload"></i> Upload Data
            </Link>
          </li>
          <li>
            <Link to="/reports" className={isActive('/reports')}>
              <i className="fas fa-chart-line"></i> Reports
            </Link>
          </li>
          <li>
            <Link to="/config" className={isActive('/config')}>
              <i className="fas fa-cog"></i> Configuration
            </Link>
          </li>
        </ul>

        <div className="navbar-user">
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </div>

          <div 
            className="user-profile"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="user-details">
              <div className="user-name">System Administrator</div>
              <div className="user-role">Super Admin</div>
            </div>
            <div className="user-avatar">SA</div>
          </div>

          {showUserMenu && (
            <div className="user-menu">
              <div className="menu-item">
                <i className="fas fa-user"></i> Profile
              </div>
              <div className="menu-item">
                <i className="fas fa-cog"></i> Settings
              </div>
              <div className="menu-item">
                <i className="fas fa-sign-out-alt"></i> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
