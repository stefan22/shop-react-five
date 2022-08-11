/* eslint-disable */
export const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action)
  }

  console.info('type: ==> ', action.type)

  console.info('payload: ==> ', action.payload)

  console.info('currentState: ==> ', store.getState())

  next(action)

  console.info('type: ==> ', store.getState())
}
