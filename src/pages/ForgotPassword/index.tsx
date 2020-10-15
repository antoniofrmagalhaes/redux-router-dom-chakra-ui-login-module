import { Flex } from '@chakra-ui/core'
import React from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'

import ForgotPasswordForm from '../../components/ForgotPasswordForm'
import LoginNavigationButton from '../../components/LoginNavigationButton'

import { Container, Heading } from './styles'

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Heading>
        <h3>Forgot password?</h3>
        <p>
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </p>
      </Heading>
      <ForgotPasswordForm />
      <LoginNavigationButton path="/login">
        <Flex alignItems="center">
          <RiArrowLeftLine size={18} /> Back to login
        </Flex>
      </LoginNavigationButton>
    </Container>
  )
}

export default ForgotPassword
