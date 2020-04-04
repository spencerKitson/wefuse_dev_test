import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <Link className='link' to='/' className="nav-logo">
          <h1 className="logo-text">WF</h1>
        </Link>
        <div className="nav-burger">
          <div className="burger-stripe"></div>
          <div className="burger-stripe"></div>
          <div className="burger-stripe"></div>
        </div>
      </div>
    </div>
  );
}
