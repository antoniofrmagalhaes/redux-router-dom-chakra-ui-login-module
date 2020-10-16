import styled from 'styled-components'
import { Form as UnformForm } from '@unform/web'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled(UnformForm)`
  width: 100%;
`
