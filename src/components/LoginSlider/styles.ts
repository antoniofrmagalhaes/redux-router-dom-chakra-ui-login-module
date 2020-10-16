import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #cccccc;
  ${({ theme }) => theme}
  background: linear-gradient(135deg,  ${({ theme }) =>
    theme.app.primary}, #542591);

  @media screen and (max-width: 1023px) {
    display: none;
  }
`
