import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Profile from './Profile'
import EventTable from './EventTable'
import PBar from './ProgressBar'
import { GET_VIEWER_EVENTS } from './queries'
import { GET_VIEWER_TRACK_EVENTS } from './EventTable/queries'
import 'typeface-montserrat'

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

      <PBar
        style={{ backgroundColor: '#e26355', paddingBottom: '10vh' }}
        data3={data.userEvents}
      />


      <EventTable style={{ backgroundColor: '#e26355', paddingTop: '0vh', paddingBottom: '10vh' }} data1={data.userEvents} data3={data2.userTrackEvents} />

    </div>

  )
}

export default Progress
