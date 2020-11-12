import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'

import {
  SignupButton, ErrorText,
} from './styles'

import Input from '../../components/Input'
import Title from '../../components/SignIn/Title'
import SignIn from '../../components/SignIn'

import { LOGIN } from './graphql'

import { useGlobalContext } from '../../utils/globalContext'
import useForm from '../../utils/useForm'
import { LoginYupSchema } from '../../utils/yup'
import { ROUTE_PATHS } from '../../utils/constants'

const Login = () => {
  const [DBError, setError] = useState('')
  const {
    state, dispatch, validate, errors,
  } = useForm({
    email: '',
    password: '',
  }, LoginYupSchema)

  const history = useHistory()

  const { setIsSignedIn } = useGlobalContext()

  const [login, { loading }] = useMutation(
    LOGIN,
    {
      variables: { email: state.email.trim(), password: state.password },
      onError: err => {
        setError(err.graphQLErrors && err.graphQLErrors.length ? err.graphQLErrors[0].message : 'An error occurred')
      },
      onCompleted: () => {
        setIsSignedIn(true)
        history.push(ROUTE_PATHS.HOME)
      },
    },
  )
  const handleSubmit = async () => {
    if (await validate()) {
      login()
    }
  }
  if (loading) {
    return (
      <SignIn isLoading>
        <Title color="#c93826" fontWeight="600" fontSize="4rem">Welcome Back!</Title>
        <Title color="#c93826" fontSize="2rem" margin="4vh">Login to get comping!</Title>
        <p>Loading</p>
      </SignIn>
    )
  }
  return (
    <SignIn>
      <Title color="#c93826" fontWeight="600" fontSize="4rem">Welcome Back!</Title>
      <Title color="#c93826" fontSize="2rem" margin="4vh">Login to get comping!</Title>
      <Title fontSize="1.8rem" margin="40px">
        Login to your account
      </Title>
      <Input placeholder="email" value={state.email} setValue={val => dispatch({ action: 'email', payload: val })} />
      <ErrorText style={{ visibility: `${errors.email ? 'visible' : 'hidden'}` }}>{errors.email}</ErrorText>
      <Input type="password" placeholder="password" value={state.password} setValue={val => dispatch({ action: 'password', payload: val })} />
      <ErrorText style={{ visibility: `${(errors.password || DBError) ? 'visible' : 'hidden'}` }}>{errors.password || DBError}</ErrorText>
      <SignupButton onClick={handleSubmit}>Login</SignupButton>

      <p style={{ textAlign: 'center' }}>
        Need to make an account?
        <a href="/register" style={{ textDecoration: 'none', color: 'c93826' }}>
                &nbsp;Sign up
        </a>
      </p>
    </SignIn>
  )
}

export default Login
