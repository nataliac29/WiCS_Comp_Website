/* eslint-disable linebreak-style */
import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { SignupButton } from './styles'
import { LOGIN } from './graphql'

const Button = ({ email, password }) => {
  const history = useHistory()
  const [login, { error, loading }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onError: () => { },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/dashboard')
    },
  })

  if (loading) {
    return (
      <SignupButton type="button">
        <img alt="" width="10px" src="https://static.thenounproject.com/png/20724-200.png" />
      </SignupButton>
    )
  }

  if (error) {
    return (
      <>
        <p>Invalid email or password.</p>
        <SignupButton type="button" onClick={login}> Login </SignupButton>
      </>
    )
  }

  return (
    <SignupButton type="button" onClick={login}> Login </SignupButton>
  )
}

export default Button
