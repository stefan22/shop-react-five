import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/mad-duck-logo.png';
import * as ROUTES from '../../helpers/constants/routes';
import './styles.scss';


const Navigation = () => (
  <div className="header">
    <div className="header__inner-wrapper">
      <Link className="logo-wrapper" to={ROUTES.HOME}>
        <img
          src={logo}
          width="885"
          height="931"
          className="logo"
          alt="logo"
        />
      </Link>
      <div className="header-menu">
        <Link className="header-menu--link" to={ROUTES.SHOP}>
          SHOP
        </Link>
        <Link
          className="header-menu--link"
          to={ROUTES.SIGNIN}
        >
          SIGNIN
        </Link>


      </div>
    </div>
  </div>
);

export default Navigation;
