import React from 'react'
import { Container, NavLinks, NavBLink } from './styles'
import wicslogo from '../../assets/harvardwicslogo.jpeg'

const NavBar = () => (
  <div>
    <Container>
      <NavBLink to="/">
        <img
          alt="harvard wics logo"
          src={wicslogo}
          style={{
            width: '9vw', height: 'undefined', aspectRatio: '1/2', borderRadius: '10%',
          }}
        />
      </NavBLink>
      <NavLinks>
        <NavBLink to="/login"> Login </NavBLink>
        <NavBLink to="/register"> Register</NavBLink>
      </NavLinks>
    </Container>
  </div>
)
export default NavBar
