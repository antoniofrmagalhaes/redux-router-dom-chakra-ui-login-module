import React from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import * as Yup from 'yup'

import { useAuth } from '../../contexts/AuthContext'

import getValidationErrors from '../../utils/getValidationErrors'

import LoginFormSubmitButton from '../LoginFormSubmitButton'
import LoginFormInput from '../LoginFormInput'

import { Form } from './styles'

interface FormData {
  password: string
  confirmPassword: string
}

type TokenType = {
  token: string
}

const ResetPasswordForm: React.FC<RouteComponentProps<TokenType>> = ({
  match: {
    params: { token }
  }
}) => {
  const formRef = React.useRef<FormHandles>(null)
  const { resetPassword } = useAuth()
  const handleSubmit: SubmitHandler<FormData> = async ({
    password,
    confirmPassword
  }) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        password: Yup.string().required('Password is required.'),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password')],
          'Passwords must match.'
        )
      })
      await schema.validate(
        { password, confirmPassword },
        {
          abortEarly: false
        }
      )
      resetPassword(password, token)
    } catch (err) {
      const validationErrors = getValidationErrors(err)
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(validationErrors)
      }
    }
  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <LoginFormInput label="New Password" type="password" name="password" />
      <LoginFormInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
      />
      <LoginFormSubmitButton>Reset Password</LoginFormSubmitButton>
    </Form>
  )
}

export default withRouter(ResetPasswordForm)
