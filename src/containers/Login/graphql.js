import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation userLogin($email: EmailAddress!, $password:String!) {
        userLogin(email:$email, password:$password) {
            token
            user {
                id
                email
            }
        }
    }
`
