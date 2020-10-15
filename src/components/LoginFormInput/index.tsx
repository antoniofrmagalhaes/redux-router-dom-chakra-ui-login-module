import React, { InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'

import { Container, FormControl, ErrorMessage } from './styles'
import { FormLabel } from '@chakra-ui/core'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const LoginFormInput: React.FC<IInputProps> = ({ label, name, ...rest }) => {
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
