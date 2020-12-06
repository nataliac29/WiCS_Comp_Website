import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_NAME_PROFILE } from './queries'
import { Welcome } from '../styles'


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
    <div>
      <Welcome style={{ fontSize: '3em', marginTop: '8vh', marginLeft: '5vw' }}>
        {`${data.viewer.firstName} ${data.viewer.lastName}`}
      </Welcome>
      <Welcome style={{
        fontSize: '1em', marginTop: '1vh', fontWeight: 'light', marginBottom: '5vh', marginLeft: '5vw',
      }}
      >
        {`${data.viewer.email}`}
      </Welcome>
    </div>
  )
}

export default Profile
