import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import FormLink from './form-link';
import * as ROUTES from '../../helpers/constants/routes';

import './styles.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log('authUser is ', authUser);
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      });

    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleGoogleSignIn = () => {
    this.props.firebase.doSignInWithGoogle();
    this.props.history.push(ROUTES.HOME);
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="sign-in">
        <div className="sign-in__heading">
          <h1>Already have an account</h1>
          <h3>Sign in with your email and password</h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          {error && (
            <p id="signin-error">{error.message}</p>
          )}

          <CustomButton svg={'true'} type="submit">
            {' '}
            Sign in{' '}
          </CustomButton>

          <button 
            onClick={this.handleGoogleSignIn}
            className="signin-with-google">
            SIGNIN WITH GOOGLE
          </button>
        </form>

        <FormLink
          intro={"Don't have an account yet? "}
          routePath={'/signup'}
        />
      </div>
    );
  }
}

export default SignIn;
