import React from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useAuth } from '../../contexts/AuthContext'

import getValidationErrors from '../../utils/getValidationErrors'

import LoginFormSubmitButton from '../LoginFormSubmitButton'
import LoginFormInput from '../LoginFormInput'
import LoginFormCheckbox from '../LoginFormCheckbox'

import { FormContainer, Form } from './styles'

interface FormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const { login } = useAuth()
  const formRef = React.useRef<FormHandles>(null)
  const handleSubmit = React.useCallback(
    async ({ email, password }: FormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insert a valid e-mail.')
            .required('E-mail is required.'),

          password: Yup.string().required('Password is required.')
        })
        await schema.validate(
          { email, password },
          {
            abortEarly: false
          }
        )
        login(email, password)
      } catch (err) {
        const validationErrors = getValidationErrors(err)
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(validationErrors)
        }
      }
    },
    [login]
  )
  return (
    <FormContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <LoginFormInput
          label="E-mail"
          name="email"
          placeholder="email@company.com"
        />
        <LoginFormInput
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••••••"
        />
        <LoginFormCheckbox label="Keep me logged in" />
        <LoginFormSubmitButton>Log in</LoginFormSubmitButton>
      </Form>
    </FormContainer>
  )
}

export default LoginForm
