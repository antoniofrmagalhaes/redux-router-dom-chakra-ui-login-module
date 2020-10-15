import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Checkbox } from './styles'

interface ILoginFormCheckboxProps {
  label: string
}

const LoginFormCheckbox: React.FC<ILoginFormCheckboxProps> = ({ label }) => {
  return (
    <Container>
      <Checkbox defaultIsChecked>{label}</Checkbox>
      <Link to="/password/forgot">Forgot your password?</Link>
    </Container>
  )
}

export default LoginFormCheckbox
