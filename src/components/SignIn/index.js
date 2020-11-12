import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import {
  LoginContainer, InnerLogin, Container, PictureContainer, LoadingContainer,
} from './styles'


const SignIn = ({ isLoading, children }) => (
  !isLoading
    ? (
      <Container>
        <PictureContainer>
          {children.slice(0, 2)}
        </PictureContainer>
        <LoginContainer>
          <InnerLogin>
            {children.slice(2)}
          </InnerLogin>
        </LoginContainer>
      </Container>
    )
    : (
      <Container>
        <PictureContainer>
          {children.slice(0, 2)}
        </PictureContainer>
        <LoadingContainer>
          <MoonLoader />
        </LoadingContainer>
      </Container>
    )
)

export default SignIn
