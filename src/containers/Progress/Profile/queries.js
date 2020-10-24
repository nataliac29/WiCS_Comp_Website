import gql from 'graphql-tag'

export const GET_NAME_PROFILE = gql`
    query {
        viewer {
            firstName
            lastName
            email
        }
    }

`
