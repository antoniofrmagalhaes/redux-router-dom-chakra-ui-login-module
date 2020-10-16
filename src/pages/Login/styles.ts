import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
  }
`

export const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  color: #666666;
  > h3 {
    font-size: 26px;
    font-weight: bold;

    @media screen and (min-width: 1600px) {
      font-size: 29px;
    }
  }
  > p {
    font-size: 14px;

    @media screen and (min-width: 1600px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1600px) {
      font-size: 18px;
    }
  }
`

export const ForgotPasswordLinkContainer = styled.div`
  position: absolute;
  height: 50px;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dddddd;
  > p {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    width: calc(50% + 1px);
  }
`
