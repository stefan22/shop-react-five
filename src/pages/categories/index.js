import React from 'react'
import {useLocation, useParams, Link } from 'react-router-dom'


const Categories = ({ match, location }) => {

  const {
    params: { userId }
  } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>

      </p>
    </>
  );
};

export default Categories