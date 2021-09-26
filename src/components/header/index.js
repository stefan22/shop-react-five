import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/mad-duck-logo.png';

import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="header__inner-wrapper">
      <Link className="logo-wrapper" to="/">
        <img
          src={logo}
          width="885"
          height="931"
          className="logo"
          alt="logo"
        />
      </Link>
      <div className="header-menu">
        <Link className="header-menu--link" to="/shop">
          SHOP
        </Link>
        <Link className="header-menu--link" to="/signin">
          SIGNIN
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
