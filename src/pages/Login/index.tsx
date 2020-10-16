import React from 'react'
import ForgotPasswordLink from '../../components/ForgotPasswordLink'

import LoginForm from '../../components/LoginForm'
import LoginSlider from '../../components/LoginSlider'

import {
  Container,
  LoginFormContainer,
  ForgotPasswordLinkContainer
} from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <LoginFormContainer>
        <LoginForm />
      </LoginFormContainer>
      <LoginSlider />
      <ForgotPasswordLinkContainer>
        <p>
          Forgot your password?{' '}
          <ForgotPasswordLink to="/password/forgot">
            Get help
          </ForgotPasswordLink>
        </p>
      </ForgotPasswordLinkContainer>
    </Container>
  )
}
export default Login
