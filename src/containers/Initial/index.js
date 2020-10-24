import React from 'react'
import Intro from '../Home/Intro'
import MoreInfo from '../Home/MoreInfo/DirectorBios'
import { Container, NavLinks, NavBLink } from '../AuthenticatedNavBar/styles'
import wicslogo from '../../assets/harvardwicslogo.jpeg'

const Initial = () => (
  <div>
    <p>HI</p>
    <Container>
      <NavBLink to="/home">
        <img
          alt="harvard wics logo"
          src={wicslogo}
          style={{
            width: '9vw', height: 'undefined', aspectRatio: '1/2', borderRadius: '10%',
          }}
        />
      </NavBLink>
      <NavLinks>
        <NavBLink to="/login"> Log in </NavBLink>
        <NavBLink to="/register"> Register </NavBLink>
      </NavLinks>
    </Container>
    <Intro />
    <MoreInfo />
  </div>
)
export default Initial
