import styled, { css } from 'styled-components'

interface IDotProps {
  active?: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #cccccc;
  background: linear-gradient(135deg, #5b24c2, #542591);
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  color: #ffffff;
  > h4 {
    font-weight: bold;
  }
  > p {
    text-align: center;
    letter-spacing: 1px;
    margin-top: 10px;
  }
`

export const Dots = styled.ul`
  list-style: none;
  margin-top: 16px;
`

export const Dot = styled.li<IDotProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  & + li {
    margin-left: 5px;
  }
  ${({ active }) =>
    active &&
    css`
      background: #ffffff;
    `}
`
