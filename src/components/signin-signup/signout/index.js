import React from 'react';
import { withFirebase } from '../../../firebase/';
import './styles.scss';

const SignOut = props => {
  console.log(props);

  return (
    <button
      id="signout-button"
      type="button"
      onClick={props.firebase.doSignOut}
    >
      SIGNOUT
    </button>
  );
};

export default withFirebase(SignOut);
