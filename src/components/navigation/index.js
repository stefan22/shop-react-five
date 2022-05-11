import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../firebase/firebase'
import logo from '../../assets/mad-duck-logo.png';
import * as ROUTES from '../../helpers/constants/routes';
import './styles.scss';


const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const doSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  } 
  
  return (
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


        { currentUser ? (

          <Link
            className="header-menu--link"
            onClick={{doSignOut}}
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
    <Outlet />
  </div>
  )}

export default Navigation;
