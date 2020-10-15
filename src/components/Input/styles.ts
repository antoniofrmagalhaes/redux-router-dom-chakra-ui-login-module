import styled, { css } from 'styled-components'

interface IContainerProps {
  hasError?: boolean
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  > input {
    max-width: 400px;
    width: 100%;
    height: 35px;
    padding: 0 16px;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.app.border};
    transition: all 250ms ease;
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: ${({ theme }) => theme.app.error};
      `}
    &:focus {
      outline-width: 0;
      border-color: ${({ theme }) => theme.app.primary};
    }
    @media screen and (min-width: 420px) {
    }
  }
`

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  font-weight: bold;
  color: #ff2436;
`
