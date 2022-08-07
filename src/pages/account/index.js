import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
  let user = useSelector(state => state?.user?.currentUser)

  return (
    <div className="current-user__wrapper">
      <header>
        <h3>Hello {user?.email}</h3>
      </header>
      <main>
        <p>UID: {user?.uid}</p>
      </main>
    </div>
  )
}

export default Account
