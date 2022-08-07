import USER_ACTION_TYPES from './userTypes'
import { createAction } from '../../helpers/redux/createAction'

export const setCurrentUser = user =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
