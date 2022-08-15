import React from 'react'
import { withFirebase } from '../../../../firebase'
import './styles.scss'

/**
 * Should use it for signin and signout with an svg icon
 * as a re-usable component.
 */

const SignOut = props => (
  <button
    id="signout-button"
    type="button"
    onClick={props.firebase.doSignOut}
  >
    SIGN-OUT
  </button>
)

export default withFirebase(SignOut)
