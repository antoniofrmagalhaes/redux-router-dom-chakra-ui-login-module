import styled, { keyframes } from 'styled-components'
import { FormControl as ChakraFormControl } from '@chakra-ui/core'
import { Form as UnformForm } from '@unform/web'
import Input from '../Input'

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
  > button {
    max-width: 400px;
    width: 100%;
    height: 45px;
    font-weight: bold;
    margin-top: 24px;
    color: #ffffff;
    border-radius: 8px;
    transition: all 250ms ease;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);
    /* transform: translateY(70px); */
    /* opacity: 0; */
    /* animation: 250ms ${fadeUp} 350ms ease forwards; */
    background: #6f3ec9;
    &:hover {
      /* opacity: 1; */
      background: #5b24c2;
    }
    &:focus {
      outline-width: 0;
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
    }
  }
`

export const FormControl = styled(ChakraFormControl)`
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
    margin-top: 24px;
    transform: translateY(70px);
    opacity: 0;
    animation: 250ms ${fadeUp} 300ms ease forwards;
  } */
`

export const Styledinput = styled(Input)`
  max-width: 400px;
  width: 100%;
  height: 45px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  transition: all 250ms ease;
  &:focus {
    border: 2px solid #5b24c2;
    padding: 0 15px;
  }
`
