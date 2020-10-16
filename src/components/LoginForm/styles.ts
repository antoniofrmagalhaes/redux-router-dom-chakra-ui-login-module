import styled from 'styled-components'
import { Form as UnformForm } from '@unform/web'

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media screen and (min-width: 420px) {
    max-width: 350px;
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    max-width: 280px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 300px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 350px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 400px;
  }
`

export const Form = styled(UnformForm)`
  width: 100%;
  height: 100%;
`
