import React from 'react'
import { signOutUser } from '../firebase/firebase'
import './styles.scss'

const SignOut = props => (
  <button
    id="signout-button"
    type="button"
    onClick={signOutUser}
  >
    SIGN-OUT
  </button>
)

export default SignOut
