import React from 'react';
import { SignUp } from '../../components/signin-signup/';
//fb
import { withFirebase } from '../../firebase/';
//styles
import './styles.scss';

const Signup = props => (
  <div className="signup-wrapper">
    <SignUp {...props} />
  </div>
);

export default withFirebase(Signup);
