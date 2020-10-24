import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import {
  Container, LoginContainer, Input, Title, Font, PictureContainer, InnerLogin, SignupButton,
} from './styles'
import { LOGIN } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { error, loading }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onError: () => {},
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
          <p style={{ color: '#c93826', fontSize: '4em' }}>Welcome Back!</p>
          <br />
          <br />
          <br />
          <p style={{ color: '#c93826', fontSize: '2em' }}>Login to get comping!</p>
        </PictureContainer>
        <LoginContainer>
          <InnerLogin>
            <Title>
              <span style={{ color: '#c93826' }}>Login </span>
              to your account
            </Title>
            <Input placeholder="email" value={email} onChange={element => setEmail(element.target.value)} />
            <Input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <SignupButton onClick={login}>Login</SignupButton>

            <p style={{ textAlign: 'center' }}>
              Need to make an account?
              <a href="/register" style={{ textDecoration: 'none', color: 'c93826' }}>
                &nbsp;Sign up
              </a>
            </p>
          </InnerLogin>
        </LoginContainer>
      </Container>
    </Font>
  )
}

export default Login
