import React, { useState } from 'react'
//components
import FormLink from './form-link'
import FormInput from '../form-input'
import CustomButton from '../custom-button'
// firebase api
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../firebase/firebase'
// styles
import './styles.scss'

// initial state
const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithPopup = async () => {
    await signInWithGooglePopup()
    createUserDocumentFromAuth();
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

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
          autoComplete={'true'}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          autoComplete={'current-password'}
          required
        />

        <div className={'sign-in-buttons__wrapper'}>
          <CustomButton
            svg={'true'}
            type="submit">
            Sign in{' '}
          </CustomButton>

          <button
            onClick={signInWithPopup}
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
  )
}

export default SignInForm
