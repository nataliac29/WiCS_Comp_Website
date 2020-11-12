import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, NavLinks, NavBLink } from './styles'
import wicslogo from '../../assets/harvardwicslogo.jpeg'


import { useGlobalContext } from '../../utils/globalContext'
import { ROUTE_PATHS } from '../../utils/constants'

const NavBar = () => {
  const history = useHistory()
  const { setIsSignedIn } = useGlobalContext()
  return (
    <div>
      <Container>
        <NavBLink to="/">
          <img
            alt="harvard wics logo"
            src={wicslogo}
            style={{
              width: '40%', height: '100%', aspectRatio: '2', borderRadius: '10%',
            }}
          />
        </NavBLink>
        <NavLinks>
          <NavBLink to="/AddEvent"> Add Events </NavBLink>
          <NavBLink to="/progress"> Progress </NavBLink>
          <NavBLink to="/resources"> Resources </NavBLink>
          <NavBLink onClick={() => {
            localStorage.removeItem('token')
            history.push(ROUTE_PATHS.HOME)
            setIsSignedIn(false)
            window.location.reload(false)
          }}
          >
            Logout
          </NavBLink>
        </NavLinks>
      </Container>
    </div>
  )
}
export default NavBar
