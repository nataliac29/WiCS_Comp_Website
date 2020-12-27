import React from 'react'
import { Route } from 'react-router-dom'
import { useGlobalContext } from '../utils/globalContext'
import UnauthenticatedNavbar from '../containers/UnauthenticatedNavBar'
import AuthenticatedNavbar from '../containers/AuthenticatedNavBar'

const PublicRoute = ({ children, error, ...rest }) => {
  const { isSignedIn } = useGlobalContext()
  return (
    <Route
      {...rest}
      render={() => (!isSignedIn ? (
        <>
          <UnauthenticatedNavbar />
          {children}
        </>
      ) : (
        <>
          <AuthenticatedNavbar>
            {children}
          </AuthenticatedNavbar>
        </>
      ))}
    />
  )
}

export default PublicRoute
