import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUser } from '../../firebase/firebase'
import { signOutCurrentUser } from '../../redux-store/user/userActions'
import { userSelector } from '../../redux-store/user/userSelector'
import logo from '../../assets/mad-duck-logo.png'
import cartIcon from '../../assets/images/shopping-bag.svg'
import * as ROUTES from '../../helpers/constants/routes'
import './styles.scss'

const Navigation = () => {
  const currentUser = useSelector(userSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = async () => {
    await signOutUser()
    dispatch(signOutCurrentUser())
    navigate(ROUTES.SIGNIN)
  }

  return (
    <div className="header">
      <nav className="header__inner-wrapper">
        <Link
          data-test="navigation-link-home"
          className="logo-wrapper"
          to={ROUTES.HOME}
        >
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
            data-test="navigation-link-shop"
            className="header-menu--link"
            to={ROUTES.SHOP}
          >
            SHOP
          </Link>

          {currentUser?.uid ? (
            <>
              <Link
                data-test="navigation-link-account"
                className="header-menu--link"
                to={ROUTES.ACCOUNT}
              >
                ACCOUNT
              </Link>

              <Link
                data-test="navigation-link-signout"
                className="header-menu--link"
                onClick={handleSignOut}
                to={ROUTES.SIGNIN}
              >
                SIGNOUT
              </Link>
            </>
          ) : (
            <Link
              data-test="navigation-link-signin"
              className="header-menu--link"
              to={ROUTES.SIGNIN}
            >
              SIGNIN
            </Link>
          )}

          <Link
            data-test="navigation-link-cart"
            to={ROUTES.HOME}
            className="topnav-cart"
          >
            <img
              src={cartIcon}
              width={31}
              height={40}
              alt={'cart'}
            />
            <span className="cart-count">{0}</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
