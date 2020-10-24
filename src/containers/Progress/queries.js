import gql from 'graphql-tag'

export const GET_VIEWER_EVENTS = gql`
    query userEvents{
        userEvents {
            id
            eventname
            type
            datetime
            des
            createdAt
        }
    }

`
