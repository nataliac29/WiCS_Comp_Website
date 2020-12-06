import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Profile from './Profile'
import EventTable from './EventTable'
import PBar from './ProgressBar'
import { GET_VIEWER_EVENTS } from './queries'
import { GET_VIEWER_TRACK_EVENTS } from './EventTable/queries'
import { Container } from './styles'


const Progress = () => {
  const { loading, error, data } = useQuery(GET_VIEWER_EVENTS)
  const { loading: loading2, error: error2, data: data2 } = useQuery(GET_VIEWER_TRACK_EVENTS)
  if (loading) {
    return (
      <> </>
    )
  }
  if (error) {
    return (
      <> </>
    )
  }
  if (loading2) {
    return (
      <p>loading</p>
    )
  }

  if (error2) {
    return (
      <p>error</p>
    )
  }

  return (
    <div>
      <Profile />
      <Container>
        <PBar
          style={{ backgroundColor: '#e26355' }}
          data3={data.userEvents}
        />
        <div style={{ paddingBottom: '5vh' }}>
          <EventTable data1={data.userEvents} data3={data2.userTrackEvents} />
        </div>
      </Container>
    </div>

  )
}

export default Progress
