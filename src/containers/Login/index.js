import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import {
  Container, LoginContainer, Title, Font, PictureContainer, InnerLogin, SignupButton, ErrorText,
} from './styles'
import { LOGIN } from './graphql'
import { useGlobalContext } from '../../utils/globalContext'
import useForm from '../../utils/useForm'
import { LoginYupSchema } from '../../utils/yup'
import { ROUTE_PATHS } from '../../utils/constants'
import Input from '../../components/Input'

const Login = () => {
  const {
    state, dispatch, validate, errors,
  } = useForm({
    email: '',
    password: '',
  }, LoginYupSchema)

  const history = useHistory()

  const { setIsSignedIn } = useGlobalContext()

  const [login, { error, loading }] = useMutation(
    LOGIN,
    {
      variables: { email: state.email.trim(), password: state.password },
      onError: () => {},
      onCompleted: () => {
        setIsSignedIn(true)
        // localStorage.setItem('token', token)
        history.push(ROUTE_PATHS.HOME)
      },
    },
  )
  const handleSubmit = async () => {
    if (await validate()) {
      login()
    }
  }

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
          <Title color="#c93826" font_weight="600" font_size="4rem">Welcome Back!</Title>
          <br />
          <br />
          <br />
          <Title color="#c93826" font_size="2rem" margin="4vh">Login to get comping!</Title>
        </PictureContainer>
        <LoginContainer>
          <InnerLogin>
            <Title font_size="1.8rem" margin="40px">
              Login to your account
            </Title>
            <Input placeholder="email" value={state.email} setValue={val => dispatch({ action: 'email', payload: val })} />
            <ErrorText style={{ visibility: `${errors.email ? 'visible' : 'hidden'}` }}>{errors.email ? errors.email : 'd'}</ErrorText>
            <Input password placeholder="password" value={state.password} setValue={val => dispatch({ action: 'password', payload: val })} />
            <ErrorText style={{ visibility: `${errors.password ? 'visible' : 'hidden'}` }}>{errors.password ? errors.password : 'd'}</ErrorText>
            <SignupButton onClick={handleSubmit}>Login</SignupButton>

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
