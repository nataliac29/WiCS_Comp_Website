import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useGlobalContext } from '../utils/globalContext'
import AuthenticatedNavbar from '../containers/AuthenticatedNavBar'
import { ROUTE_PATHS } from '../utils/constants'

const PrivateRoute = ({
  children, ...rest
}) => {
  const { isSignedIn } = useGlobalContext()

  return (
    <Route
      {...rest}
      render={() => (isSignedIn ? (
        <>
          <AuthenticatedNavbar />
          {children}
        </>
      ) : (
        <Redirect
          to={{
            pathname: ROUTE_PATHS.LOGIN,
          }}
        />
      ))}
    />
  )
}

export default PrivateRoute
