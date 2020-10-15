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
  color: #ffffff;
  border-radius: 4px;
  background: #6f3ec9;
  &:focus {
    outline-width: 0;
  }
  @media (min-width: 375px) {
    height: 45px;
    font-size: 14px;
  }
`
