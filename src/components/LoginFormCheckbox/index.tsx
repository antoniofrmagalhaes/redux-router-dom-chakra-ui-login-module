import React, { InputHTMLAttributes } from 'react'

import { Container, Checkbox } from './styles'

interface ILoginFormCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const LoginFormCheckbox: React.FC<ILoginFormCheckboxProps> = ({ label }) => {
  return (
    <Container>
      <Checkbox defaultIsChecked>{label}</Checkbox>
    </Container>
  )
}

export default LoginFormCheckbox
