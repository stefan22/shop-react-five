import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { ROUTES } from '../../helpers/constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }



  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const formErrors =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className="sign-in signup">
        <div className="sign-in__heading">
          <h1>Signing up is Easy!</h1>
          <h3>Your name, email and password and you're done!</h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="text"
            placeholder="Full Name"
            handleChange={this.handleChange}
            value={username}
          
            required
          />

          <FormInput
            name="email"
            type="text"
            placeholder="Email Address"
            handleChange={this.handleChange}
            value={email}
           
            required
          />

          <FormInput
            name="passwordOne"
            type="password"
            value={passwordOne}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            name="passwordTwo"
            type="password"
            value={passwordTwo}
            placeholder="Confirm Password"
            handleChange={this.handleChange}
            //label="Confirm Password"
            required
          />

          <CustomButton
            disabled={formErrors}
            svg={'true'}
            type="submit"
          >
            Sign Up
          </CustomButton>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

// const SignupLink = () => (
//   <p>
//     Don't have an account?{' '}
//     <Link to={ROUTES.signup}>Signup</Link>
//   </p>
// );

//export { SignupLink };

export default SignUp;
