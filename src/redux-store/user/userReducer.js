import USER_ACTION_TYPES from './userTypes'

const initialState = {
  currentUser: null,
  isLoading: true,
  error: null,
}

const userReducer = (state = initialState, action = {}) => {
  const { type, payload } = action
  const {
    SIGN_OUT_USER,
    SIGN_IN_USER,
    SIGN_UP_USER,
    SIGN_IN_GOOGLE_USER,
    SIGN_IN_FAILURE,
  } = USER_ACTION_TYPES

  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        currentUser: payload.auth.auth.currentUser,
        isLoading: false,
        error: null,
      }
    case SIGN_OUT_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        error: null,
      }
    case SIGN_UP_USER:
      return {
        ...state,
        currentUser: payload.auth.auth.currentUser,
        isLoading: false,
        error: null,
      }
    case SIGN_IN_GOOGLE_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        error: null,
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default userReducer
