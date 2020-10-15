import styled, { keyframes } from 'styled-components'
import { FormControl as ChakraFormControl } from '@chakra-ui/core'
import { Form as UnformForm } from '@unform/web'

const fadeUp = keyframes`
  0% {
    transform: translateY(70px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled(UnformForm)`
  max-width: 400px;
  width: 100%;
`

export const FormControl = styled(ChakraFormControl)`
  > label {
    > small {
      color: #777777;
    }
  }
  /* &:nth-child(1) {
    transform: translateY(70px);
    opacity: 0;
    animation: 250ms ${fadeUp} 200ms ease forwards;
  }
  &:nth-child(2) {
    transform: translateY(70px);
    opacity: 0;
    animation: 250ms ${fadeUp} 250ms ease forwards;
  }
  &:nth-child(3) {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    transform: translateY(70px);
    opacity: 0;
    animation: 250ms ${fadeUp} 300ms ease forwards;
  } */
`
