import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'

import {
  SignupButton, ErrorText,
} from './styles'

import Input from '../../components/Input'
import SignIn from '../../components/SignIn'
import Title from '../../components/SignIn/Title'

import { REGISTER } from './graphql'

import useForm from '../../utils/useForm'
import { RegisterYupSchema } from '../../utils/yup'

import { useGlobalContext } from '../../utils/globalContext'

const Login = () => {
  const [DBError, setError] = useState('')
  const {
    state, dispatch, validate, errors,
  } = useForm({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    year: '',
  }, RegisterYupSchema)
  const history = useHistory()
  const { setIsSignedIn } = useGlobalContext()
  const [register, { loading }] = useMutation(REGISTER, {
    variables: {
      email: state.email,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
      year: state.year,
    },
    onError: err => {
      setError(err.graphQLErrors && err.graphQLErrors.length ? err.graphQLErrors[0].message : 'An error occurred')
    },
    onCompleted: () => {
      setIsSignedIn(true)
      history.push('/')
    },
  })
  if (loading) {
    return (
      <SignIn isLoading>
        <Title color="#c93826" fontWeight="600" fontSize="4rem">Welcome to WiCS Comp!</Title>
        <Title color="#c93826" fontSize="2rem" margin="4vh">Register to get comping!</Title>
        <p>Loading</p>
      </SignIn>
    )
  }
  const handleSubmit = async () => {
    if (await validate()) {
      register()
    }
  }
  return (
    <SignIn>
      <Title color="#c93826" fontWeight="600" fontSize="4rem">Welcome to WiCS Comp!</Title>
      <Title color="#c93826" fontSize="2rem" margin="4vh">Register to get comping!</Title>
      <Title fontSize="1.8rem" margin="40px">
        Register for your account
      </Title>
      <>
        <Input
          placeholder="First Name"
          value={state.firstName}
          setValue={val => dispatch({ action: 'firstName', payload: val })}
        />
        <ErrorText style={{ visibility: `${errors.firstName ? 'visible' : 'hidden'}` }}>{errors.firstName}</ErrorText>
      </>
      <>
        <Input
          placeholder="Last Name"
          value={state.lastName}
          setValue={val => dispatch({ action: 'lastName', payload: val })}
        />
        <ErrorText style={{ visibility: `${errors.lastName ? 'visible' : 'hidden'}` }}>{errors.lastName}</ErrorText>
      </>
      <>
        <Input
          placeholder="email"
          value={state.email}
          setValue={val => dispatch({ action: 'email', payload: val })}
        />
        <ErrorText style={{ visibility: `${errors.email ? 'visible' : 'hidden'}` }}>{errors.email}</ErrorText>
      </>
      <>
        <Input
          placeholder="password"
          value={state.password}
          type="password"
          setValue={val => dispatch({ action: 'password', payload: val })}
        />
        <ErrorText style={{ visibility: `${(errors.password || DBError) ? 'visible' : 'hidden'}` }}>{errors.password}</ErrorText>
      </>
      <>
        <Input
          placeholder="year"
          value={state.year}
          setValue={val => dispatch({ action: 'year', payload: val })}
          type="number"
        />
        <ErrorText style={{ visibility: `${(errors.year || DBError) ? 'visible' : 'hidden'}` }}>{errors.year || DBError}</ErrorText>
      </>
      <SignupButton onClick={handleSubmit}>Login</SignupButton>
    </SignIn>
  )
}

export default Login
