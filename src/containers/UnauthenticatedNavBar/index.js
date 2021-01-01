import React from 'react'

import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

import wicslogo from '../../assets/new_wics_logo.png'
import {
  Container as MyContainer, NavLinks, NavBLink,
} from '../AuthenticatedNavBar/styles'


const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
}

const ElevateAppBar = ({ props, children }) => (
  <>
    <MyContainer>
      <NavBLink to="/">
        <img
          alt="harvard wics logo"
          src={wicslogo}
          style={{
            width: '12vh', height: 'auto', borderRadius: '10%',
          }}
        />
      </NavBLink>
      <NavLinks>
        <NavBLink to="/login">Login</NavBLink>
        <NavBLink to="/register">Register</NavBLink>
        <NavBLink to="/resources">Resources</NavBLink>
      </NavLinks>
    </MyContainer>
    <Toolbar id="back-to-top-anchor" />
    <Container>
      {children}
    </Container>

    <ScrollTop {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </>
)
export default ElevateAppBar
