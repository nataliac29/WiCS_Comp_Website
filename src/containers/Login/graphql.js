import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation login($email: EmailAddress!, $password:String!) {
        login(email:$email, password:$password) {
            token
            user {
                id
                email
            }
        }
    }
`
