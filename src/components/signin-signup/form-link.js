import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../helpers/constants/routes'

const FormLink = ({ intro, routePath = ROUTES.SIGNIN }) => (
  <p className="form-link">
    {intro} <Link to={`${routePath}`}>Click here.</Link>
  </p>
)

export default FormLink
