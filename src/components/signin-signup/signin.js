import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

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
          <CustomButton svg={'true'} type="submit">
            {' '}
            Sign in{' '}
          </CustomButton>

          <button
            className="signin-with-google"
           
          >
            SIGNIN WITH GOOGLE
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
