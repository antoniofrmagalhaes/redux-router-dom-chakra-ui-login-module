import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  @media (min-width: 375px) {
    padding: 32px;
  }
`

export const Heading = styled.div`
  max-width: 400px;
  width: 100%;
  > h3 {
    font-size: 18px;
    font-weight: bold;
    @media (min-width: 420px) {
      font-size: 20px;
    }
  }
  > p {
    font-size: 13px;
    margin: 10px 0;
    @media (min-width: 375px) {
      font-size: 15px;
    }
    @media (min-width: 420px) {
      font-size: 13px;
    }
  }
`
