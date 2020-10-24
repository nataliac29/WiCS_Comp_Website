import gql from 'graphql-tag'

export const REGISTER = gql`
    mutation register($email: EmailAddress!, $password:String!, $firstName:String!, $lastName: String!, $year: String) {
        register(email:$email, password:$password, firstName:$firstName, lastName:$lastName, year:$year) {
            id
        }
    }
`
