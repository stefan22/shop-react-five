import USER_ACTION_TYPES from './userTypes'
import { createAction } from '../../helpers/redux/createAction'

const {
  SIGN_OUT_USER,
  SIGN_IN_USER,
  SIGN_UP_USER,
  SIGN_IN_FAILURE,
  SIGN_IN_GOOGLE_USER,
} = USER_ACTION_TYPES


export const signOutCurrentUser = user =>
  createAction(SIGN_OUT_USER, user)

export const signUpCurrentUser = user =>
  createAction(SIGN_UP_USER, user)

export const signInCurrentUser = user =>
  createAction(SIGN_IN_USER, user)

export const signInGoogleCurrentUser = () =>
  createAction(SIGN_IN_GOOGLE_USER)

export const signInFailed = () =>
      createAction(SIGN_IN_FAILURE)
