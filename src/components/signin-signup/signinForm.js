import React from "react";
import { useState, useContext } from 'react';
import FormLink from './form-link'
import FormInput from '../form-input';
import CustomButton from "../custom-button";
import { UserContext } from '../../contexts/user.context';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../firebase/firebase';

import './styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
    
    return (
      <div className="sign-in px-3 px-sm-5">
        <div className="sign-in__heading">
          <h1>Already have an account</h1>
          <h6>Sign in with your email and password</h6>
        </div>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            label="Email"
            autoComplete={"true"}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            label="Password"
            autoComplete={"current-password"}
            required
          />

       

          <div className={"sign-in-buttons__wrapper"}>
            <CustomButton
              svg={'true'}
              type="submit">
              Sign in{' '}
            </CustomButton>

            <button
              onClick={signInWithGoogle}
              className="signin-with-google">
              SIGNIN WITH GOOGLE
            </button>
          </div>
        </form>

        <FormLink
          intro={"Don't have an account yet? "}
          routePath={'/signup'}
        />
      </div>
    );
}

export default SignInForm;
