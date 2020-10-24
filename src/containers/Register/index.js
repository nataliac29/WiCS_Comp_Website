import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import {
  Container, LoginContainer, Input, Title, Font, PictureContainer, InnerLogin, SignupButton, Text,
} from './styles'
import { REGISTER } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [year, setYear] = useState('')
  const [register, { error, loading }] = useMutation(REGISTER, {
    variables: {
      email,
      password,
      firstName,
      lastName,
      year,
    },
    onError: () => { },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    },
  })
  if (error) {
    return <p>Invalid email or password.</p>
  }
  if (loading) {
    return <p>loading</p>
  }
  return (
    <Font>
      <Container>
        <PictureContainer>
          <img alt="" src="/login.svg" />
          <Text size="3em">Welcome to WiCS Comp!</Text>
          <br />
          <br />
          <br />
          <Text>Register to get comping!</Text>
        </PictureContainer>
        <LoginContainer>
          <InnerLogin>
            <Title>
              <span style={{ color: '#c93826' }}>Register </span>
              for your account
            </Title>
            <Input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <Input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
            <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />

            <Input placeholder="password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
            <Input placeholder="year" value={year} onChange={e => setYear(e.target.value)} />
            <SignupButton onClick={register}>Login</SignupButton>
          </InnerLogin>
        </LoginContainer>
      </Container>
    </Font>
  )
}

export default Login
