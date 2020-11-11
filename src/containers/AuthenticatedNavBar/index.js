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
            width: '40%', height: '100%', aspectRatio: '2', borderRadius: '10%',
          }}
        />
      </NavBLink>
      <NavLinks>
        <NavBLink to="/AddEvent"> Add Events </NavBLink>
        <NavBLink to="/progress"> Progress </NavBLink>
        <NavBLink to="/resources"> Resources </NavBLink>
        <NavBLink to="/login"> Login </NavBLink>
      </NavLinks>
    </Container>
  </div>
)
export default NavBar
