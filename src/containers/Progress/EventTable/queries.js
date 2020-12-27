import gql from 'graphql-tag'

export const GET_VIEWER_TRACK_EVENTS = gql`
query userTrackEvents {
        userTrackEvents {
            id
            userId
            eventId
            photo
            des
            addedAt
            approved
        }
    }
`
