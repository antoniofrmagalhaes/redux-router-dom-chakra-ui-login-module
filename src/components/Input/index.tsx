import React, { InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'

import { Container, ErrorMessage } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
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
    <Container hasError={!!error}>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input
