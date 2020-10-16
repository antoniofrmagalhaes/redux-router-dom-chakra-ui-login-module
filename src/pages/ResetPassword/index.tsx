import { Flex, Heading, Text } from '@chakra-ui/core'
import React from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'

import LoginNavigationButton from '../../components/LoginNavigationButton'
import ResetPasswordForm from '../../components/ResetPasswordForm'
// import { FormContainer } from '../Login/styles'

import { Container, Header } from './styles'

const ResetPassword: React.FC = () => {
  return (
    <Container>
      {/* <FormContainer>
        <Header>
          <Heading as="h2" size="lg">
            Reset password
          </Heading>
          <Text fontSize="sm">
            We highly recommend you to not reuse previous passwords.
          </Text>
        </Header>
        <ResetPasswordForm />
      </FormContainer> */}
      <LoginNavigationButton path="/login">
        <Flex alignItems="center">
          <RiArrowLeftLine size={18} /> Back to login
        </Flex>
      </LoginNavigationButton>
    </Container>
  )
}

export default ResetPassword
