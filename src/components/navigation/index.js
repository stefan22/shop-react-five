import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../firebase/firebase'
import logo from '../../assets/mad-duck-logo.png';
import * as ROUTES from '../../helpers/constants/routes';
import './styles.scss';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  

  return (
  <div className="header">
    <div className="header__inner-wrapper">
      <Link className="logo-wrapper" to={ROUTES.HOME}>
        <Outlet />
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
        
        { currentUser ? (

          <Link
            className="header-menu--link"
            onClick={signOutUser}
            to={ROUTES.SIGNOUT}
          >
            SIGNOUT
          </Link>
          ): (
            
            <Link
            className="header-menu--link"
            to={ROUTES.SIGNIN}
            >
              SIGNIN
            </Link>

          )}

      </div>
    </div>
   
  </div>
  )}

export default Navigation;
