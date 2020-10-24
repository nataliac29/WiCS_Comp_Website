import gql from 'graphql-tag'

export const VIEWER = gql`
  query viewer{
    viewer {
      id
      firstName
      lastName
      email
      year
    }
  }
`
