import gql from 'graphql-tag'

export const VIEWER = gql`
  query userViewer{
    userViewer {
      id
      firstName
      lastName
      email
      year
      createdAt
      updatedAt
    }
  }
`
