import React from 'react'
import NavBar from '../AuthenticatedNavBar'
import { Container, ContentContainer, Footer } from './styles'


const PageWrapper = ({ children }) => (
  <Container>
    <NavBar />
    <ContentContainer>
      {children}
    </ContentContainer>
    <Footer />
  </Container>
)

export default PageWrapper
