import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import MoonLoader from 'react-spinners/MoonLoader'
import Profile from './Profile'
import EventTable from './EventTable'
import PBar from './ProgressBar'
import { GET_NAME_PROFILE, GET_VIEWER_TRACK_EVENTS } from './queries'
import { Container, LoadingContainer } from './styles'


const Progress = () => {
  const { loading, error, data: student } = useQuery(GET_NAME_PROFILE)
  const {
    loading: trackEventLoading,
    error: trackEventError,
    data: trackEvents,
  } = useQuery(GET_VIEWER_TRACK_EVENTS)
  if (error || trackEventError) {
    return (
      <p> Could not retrieve user </p>
    )
  }
  if (loading || trackEventLoading) {
    return (
      <LoadingContainer>
        <MoonLoader />
      </LoadingContainer>
    )
  }

  return (
    <div>
      <Profile student={student.userViewer} />
      <Container>
        <PBar
          style={{ backgroundColor: '#e26355' }}
          percentage={student.userViewer.progress}
          trackEvents={trackEvents.userTrackEvents}
        />
        <div style={{ paddingBottom: '5vh' }}>
          <EventTable
            trackEvents={trackEvents.userTrackEvents}
          />
        </div>
      </Container>
    </div>

  )
}

export default Progress
