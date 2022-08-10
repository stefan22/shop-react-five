import React from 'react'
import { withFirebase } from '../../../../firebase'
import './styles.scss'

/**
 * Signout working fine but
 * Atm signing out directly wit FB function - so use it or loose it
 * Ideally need an action creator for this component
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
