import React, { Component } from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import FormLink from './form-link';
import * as ROUTES from '../../helpers/constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  submitted: false,
  error: null,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleSubmit(event) {
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // eslint-disable-next-line no-console
        console.log(authUser);
        this.setState({
          ...INITIAL_STATE,
          submitted: true,
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => this.setState({ error }));
    event.preventDefault();
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      submitted,
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
          <h3>
            {submitted
              ? 'Sign up successful.'
              : "Your name, email and password and you're done!"}
          </h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="text"
            label="Full Name"
            handleChange={this.handleChange}
            value={username}
            required
          />

          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="passwordOne"
            type="password"
            handleChange={this.handleChange}
            value={passwordOne}
            label="Password"
            required
          />

          <FormInput
            name="passwordTwo"
            type="password"
            handleChange={this.handleChange}
            value={passwordTwo}
            label="Confirm Password"
            required
          />

          <CustomButton disabled={formErrors} type="submit">
            Sign Up
          </CustomButton>

          {error && (
            <p id="signup-error">{error.message}</p>
          )}

          <FormLink
            intro={'Signin with Google instead. '}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
