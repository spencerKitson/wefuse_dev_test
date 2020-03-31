// Footer Component
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <div className="nav-logo">
          <h1 className="logo-text">WF</h1>
        </div>
        <div className="nav-burger">
          <div className="burger-stripe"></div>
          <div className="burger-stripe"></div>
          <div className="burger-stripe"></div>
        </div>
      </div>
    </div>
  );
}
