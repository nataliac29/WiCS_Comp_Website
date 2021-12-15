import gql from 'graphql-tag'


export const GET_NAME_PROFILE = gql`
    query userViewer{
        userViewer {
            id
            firstName
            lastName
            email
            progress
        }
    }

`
export const GET_VIEWER_TRACK_EVENTS = gql`
query userTrackEvents {
    userTrackEvents {
        id
        userId
        eventId
        photo
        des
        approved
        addedAt
        event {
          id
          eventname
          type
        }
    }
}

`
