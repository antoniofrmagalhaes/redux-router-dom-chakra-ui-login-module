import styled, { css } from 'styled-components'
import { FormControl as ChakraFormControl } from '@chakra-ui/core'

interface IContainerProps {
  hasError?: boolean
}

export const FormControl = styled(ChakraFormControl)`
  > label {
    margin: 5px 0;
    font-size: 12px;
    color: #888888;

    @media (min-width: 375px) {
      font-size: 14px;
    }

    @media (min-width: 1024px) {
      font-size: 12px;
      margin: 3px 0;
    }

    @media (min-width: 1280px) {
    }

    @media (min-width: 1600px) {
      font-size: 16px;
    }

    @media (min-width: 1920px) {
      font-size: 18px;
      margin: 10px 0;
    }
  }

  & + div {
    margin-top: 10px;

    @media (min-width: 375px) {
      margin-top: 16px;
    }
  }
`

export const Container = styled.div<IContainerProps>`
  position: relative;
  > input {
    width: 100%;
    height: 35px;
    padding: 0 16px;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.app.border};
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: ${({ theme }) => theme.app.error};
      `}

    &:focus {
      outline-width: 0;
      border-color: ${({ theme }) => theme.app.primary};
    }

    @media (min-width: 375px) {
      font-size: 14px;
      border-width: 2px;
      height: 45px;
    }

    @media (min-width: 420px) {
      height: 40px;
    }

    @media (min-width: 1024px) {
      border-width: 1px;
      height: 35px;
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1600px) {
      height: 45px;
      font-size: 16px;
    }

    @media (min-width: 1920px) {
      height: 55px;
      font-size: 18px;
    }
  }
`

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  font-weight: bold;
  color: #ff2436;
`
