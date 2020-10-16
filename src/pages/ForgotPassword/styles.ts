import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  @media (max-width: 1023px) {
    justify-content: center;
  }

  @media (min-width: 375px) {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    padding-top: calc(32px + 5%);
  }

  @media (min-width: 1200px) {
    padding-top: calc(32px + 3%);
  }

  @media (min-width: 1600px) {
    /* background: red; */
  }

  @media (min-width: 1920px) {
    /* background: blue; */
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

    @media (min-width: 1200px) {
      font-size: 24px;
    }

    @media (min-width: 1920px) {
      font-size: 38px;
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

    @media (min-width: 1200px) {
      font-size: 16px;
    }

    @media (min-width: 1920px) {
      font-size: 22px;
    }
  }

  @media (min-width: 1920px) {
    max-width: 550px;
  }
`
