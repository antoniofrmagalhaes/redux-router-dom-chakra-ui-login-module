import React, { InputHTMLAttributes } from 'react'
import { FormLabel } from '@chakra-ui/core'
import { useField } from '@unform/core'

import { Container, FormControl, ErrorMessage } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const LoginFormInput: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = React.useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Container hasError={!!error}>
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    </FormControl>
  )
}

export default LoginFormInput
