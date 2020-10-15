import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const Heading = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  color: #666666;
  > h3 {
    font-size: 26px;
    font-weight: bold;

    @media (min-width: 1600px) {
      font-size: 29px;
    }
  }
  > p {
    font-size: 16px;

    @media (min-width: 1600px) {
      font-size: 18px;
    }
  }
`

export const ForgotPasswordContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eeeeee;
  > a {
    font-weight: bold;
    opacity: 0.6;
    transition: all 350ms ease;
    &:hover,
    &:active {
      color: #5b24c2;
      opacity: 1;
    }
  }
`
