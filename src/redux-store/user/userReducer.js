import USER_ACTION_TYPES from './userTypes'

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

const userReducer = (state = initialState, action = {}) => {
  const { type, payload } = action
  const { SET_CURRENT_USER, SIGN_OUT_CURRENT_USER } = USER_ACTION_TYPES

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload.auth.auth.currentUser,
      }
    case SIGN_OUT_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      }
    default:
      return state
  }
}

export default userReducer
