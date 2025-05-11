import React from 'react';
import './Navbar.css';
import { FiSearch, FiBell, FiMessageSquare } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import property1 from "../../assets/images/user-avatar.jpg";


const Navbar = () => {
  return (
    <div className="luxury-navbar">
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search properties, tenants..." />
      </div>
      <div className="nav-right">
        <div className="nav-icon">
          <FiMessageSquare />
          <span className="notification-badge">2</span>
        </div>
        <div className="nav-icon">
          <FiBell />
          <span className="notification-badge">4</span>
        </div>
        <div className="user-menu">
          <div className="user-avatar" style={{ backgroundImage: property1}}></div>
          <select>
            <option value="admin">Admin</option>
              <option value="devops">Sign-In</option>
              <option value="ai-ml">Log-In</option>
              <option value="data-science">Guest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;