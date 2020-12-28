import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { ThemeProvider } from '@material-ui/styles'
import { GET_NAME_PROFILE } from './queries'
import { Welcome } from '../styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    fontWeight: 600,
    letterSpacing: '2px',
    lineHeight: '1em',
  },
})

const Profile = () => {
  const { loading, error, data } = useQuery(GET_NAME_PROFILE)
  if (error) {
    return (
      <p>An error has occured.</p>
    )
  }
  if (loading) {
    return (
      <div />
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Welcome style={{ fontSize: '3em', marginTop: '5vh', marginLeft: '5vw' }}>
          {`${data.viewer.firstName} ${data.viewer.lastName}`}
          &apos;s Progress
        </Welcome>
        <Welcome style={{
          fontSize: '1em', marginTop: '1vh', fontWeight: 'light', marginBottom: '5vh', marginLeft: '5vw',
        }}
        >
          {`${data.viewer.email}`}
        </Welcome>
      </div>
    </ThemeProvider>
  )
}

export default Profile
