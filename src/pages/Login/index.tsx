import React from 'react'

import LoginForm from '../../components/LoginForm'

import { Container, FormContainer, Heading } from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Heading>
          <h3>APPLICATION</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae.
          </p>
        </Heading>
        <LoginForm />
      </FormContainer>
    </Container>
  )
}
export default Login
