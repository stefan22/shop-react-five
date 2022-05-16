import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux-store/user/userSelector'
import { signOutUser } from '../../firebase/firebase'
import logo from '../../assets/mad-duck-logo.png'
import cartIcon from '../../assets/images/shopping-bag.svg'
import * as ROUTES from '../../helpers/constants/routes'
import './styles.scss'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)

  return (
    <div className="header">
      <div className="header__inner-wrapper">
        <Link
          className="logo-wrapper"
          to={ROUTES.HOME}>
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
          <Link
            className="header-menu--link"
            to={ROUTES.SHOP}>
            SHOP
          </Link>

          {currentUser !== null ? (
            <Link
              className="header-menu--link"
              onClick={signOutUser}
              to={ROUTES.HOME}>
              SIGNOUT
            </Link>
          ) : (
            <Link
              className="header-menu--link"
              to={ROUTES.SIGNIN}>
              SIGNIN
            </Link>
          )}

          <Link
            to={'/'}
            className="topnav-cart">
            <img
              src={cartIcon}
              width={31}
              height={40}
              alt={'cart'}
            />
            <span className="cart-count">{0}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation