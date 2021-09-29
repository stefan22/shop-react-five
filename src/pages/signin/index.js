import React from 'react';
//comps
import { SignIn } from '../../components/signin-signup/';
//styles
import './styles.scss';

const Signin = () => {
  return (
    <div className="signin-up-wrapper">
      <SignIn />
    </div>
  );
};

export default Signin;
