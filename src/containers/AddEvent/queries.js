import gql from 'graphql-tag'

export const GET_EVENTS = gql`
    query events {
        events {
            id
            eventname
        }
    }

`
