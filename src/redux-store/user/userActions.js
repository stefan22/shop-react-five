import USER_ACTION_TYPES from './userTypes'
import { createAction } from '../../helpers/redux/createAction'

const {
  SET_CURRENT_USER,
  SIGN_OUT_CURRENT_USER,
  SIGN_UP_CURRENT_USER,
  SIGN_IN_CURRENT_USER,
  SIGN_IN_GOOGLE_CURRENT_USER,
} = USER_ACTION_TYPES

export const setCurrentUser = user => createAction(SET_CURRENT_USER, user)

export const signOutCurrentUser = user =>
  createAction(SIGN_OUT_CURRENT_USER, user)

export const signUpCurrentUser = user =>
  createAction(SIGN_UP_CURRENT_USER, user)

export const signInCurrentUser = user =>
  createAction(SIGN_IN_CURRENT_USER, user)

export const signInGoogleCurrentUser = () =>
  createAction(SIGN_IN_GOOGLE_CURRENT_USER)
