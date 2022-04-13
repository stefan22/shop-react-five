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
      <div className="sign-in sign-up px-3 px-sm-5">
        <div className="sign-in__heading">
          <h1>No Account. Sign up now!</h1>
          <h6>
            {submitted
              ? 'Sign up successful.'
              : "Your name, email and password and you're done!"}
          </h6>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="text"
            label="Full Name"
            autoComplete={"username"}
            handleChange={this.handleChange}
            value={username}
            required
          />

          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            autoComplete={"email"}
            label="Email"
            required
          />
          <FormInput
            name="passwordOne"
            type="password"
            handleChange={this.handleChange}
            value={passwordOne}
            label="Password"
            autoComplete={"new-password"}
            required
          />

          <FormInput
            name="passwordTwo"
            type="password"
            handleChange={this.handleChange}
            value={passwordTwo}
            autoComplete={"new-password"}
            label="Confirm Password"
            required
          />

          <div className={"sign-in-buttons__wrapper"}>
            <CustomButton disabled={formErrors} type="submit">
              Sign Up
            </CustomButton>
          </div>


          {error && (
            <p id="signup-error">{error.message}</p>
          )}


        </form>
        <FormLink
          intro={'Signin with Google instead. '}
        />
      </div>
    );
  }
}

export default SignUp
