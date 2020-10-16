import styled from 'styled-components'

export const Button = styled.button.attrs({
  type: 'submit'
})`
  max-width: 400px;
  width: 100%;
  height: 35px;
  margin-top: 16px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.app.primaryTextColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.app.primary};
  &:focus {
    outline-width: 0;
  }

  @media (min-width: 375px) {
    height: 45px;
    font-size: 14px;
  }

  @media (min-width: 420px) {
    height: 40px;
  }

  @media (min-width: 1024px) {
    height: 35px;
    font-size: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }

  @media (min-width: 1600px) {
    height: 45px;
    font-size: 16px;
  }

  @media (min-width: 1920px) {
    height: 55px;
    font-size: 18px;
    margin-top: 24px;
  }
`
