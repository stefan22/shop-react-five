import React from 'react'
import { withFirebase } from '../../../../firebase'
import './styles.scss'

const SignOut = props => (
  <button
    id="signout-button"
    type="button"
    onClick={props.firebase.doSignOut}>
    SIGN-OUT
  </button>
)

export default withFirebase(SignOut)
