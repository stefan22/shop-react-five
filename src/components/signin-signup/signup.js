import React, { useState, useContext, useEffect, useCallback } from 'react'
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import FormLink from './form-link';
import { UserContext} from '../../contexts/user.context'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../firebase/firebase'
import './styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  submitted: false,
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [submitted, setSubmitted ] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setSubmitted(false);
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    setSubmitted(true);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
   
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  
  const doSubmitted = useCallback( () => {
    return  setSubmitted(false);
  },[submitted])
  
  useEffect(() => {
      doSubmitted()
      return () => doSubmitted
    },
    [])

  return (
    <div className="sign-in sign-up px-3 px-sm-5">
      <div className="sign-in__heading">
        <h1>No Account. Sign up now!</h1>
        <h6>
          {submitted
            ? 'Form submitted.'
            : "Your name, email and password and you're done!"}
        </h6>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          autoComplete={"displayName"}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          autoComplete={"email"}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          autoComplete={"new-password"}
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          autoComplete={"new-password"}
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <div className={"sign-in-buttons__wrapper"}>
          <CustomButton type="submit">
            Sign Up
          </CustomButton>
        </div>


     


      </form>
      <FormLink
        intro={'Signin with Google instead. '}
      />
    </div>
  );
  
  
}



export default SignupForm
