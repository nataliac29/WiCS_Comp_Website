import React from 'react'
import { Welcome } from '../styles'


const Profile = ({ student }) => (
  <div>
    <Welcome style={{ fontSize: '3em', marginTop: '8vh', marginLeft: '5vw' }}>
      {`${student.firstName} ${student.lastName}`}
    </Welcome>
    <Welcome style={{
      fontSize: '1em', marginTop: '1vh', fontWeight: 'light', marginBottom: '5vh', marginLeft: '5vw',
    }}
    >
      {`${student.email}`}
    </Welcome>
  </div>
)

export default Profile
