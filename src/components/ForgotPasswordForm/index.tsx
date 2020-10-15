import React from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import LoginFormInput from '../LoginFormInput'

import { useAuth } from '../../contexts/AuthContext'

import { Form } from './styles'

import getValidationErrors from '../../utils/getValidationErrors'
import LoginFormSubmitButton from '../LoginFormSubmitButton'

interface FormData {
  email: string
}

const ForgotPasswordForm: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null)
  const { forgotPassword } = useAuth()
  const handleSubmit = React.useCallback(
    async ({ email }: FormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insert a valid e-mail.')
            .required('E-mail is required.')
        })
        await schema.validate(
          { email },
          {
            abortEarly: false
          }
        )
        forgotPassword(email)
      } catch (err) {
        const validationErrors = getValidationErrors(err)
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(validationErrors)
        }
      }
    },
    [forgotPassword]
  )

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <LoginFormInput
        label="Your e-mail"
        name="email"
        placeholder="email@company.com"
      />
      <LoginFormSubmitButton>Request Password Reset</LoginFormSubmitButton>
    </Form>
  )
}

export default ForgotPasswordForm
