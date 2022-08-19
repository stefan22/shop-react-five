import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import FormInput from '../form-input'
import CustomButton from '../custom-button'
import FormLink from './form-link'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../firebase/firebase'
import './styles.scss'
import {
  signInFailed,
  signUpCurrentUser,
} from '../../redux-store/user/userActions'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignupForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      dispatch(signUpCurrentUser(user))
      resetFormFields()
      navigate('/account')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        dispatch(signInFailed())
        alert('Cannot create user, email already in use')
      } else {
        dispatch(signInFailed())
        // eslint-disable-next-line no-console
        console.log('user creation encountered an error', error)
      }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-in sign-up px-3 px-sm-5">
      <div className="sign-in__heading">
        <h1>No Account. Sign up now!</h1>
        <h6>Your name, email and password and you're done!</h6>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          autoComplete={'displayName'}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          autoComplete={'email'}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          autoComplete={'new-password'}
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          autoComplete={'new-password'}
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <div className={'sign-in-buttons__wrapper'}>
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>

        <FormLink intro={'Signin with Google instead. '} />
      </form>
    </div>
  )
}

export default SignupForm
