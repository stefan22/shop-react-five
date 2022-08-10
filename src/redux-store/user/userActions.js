import USER_ACTION_TYPES from './userTypes'
import { createAction } from '../../helpers/redux/createAction'

export const setCurrentUser = user =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const signOutCurrentUser = user =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_CURRENT_USER, user)
