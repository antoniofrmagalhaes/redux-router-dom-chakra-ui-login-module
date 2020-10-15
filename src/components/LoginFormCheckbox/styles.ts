import styled from 'styled-components'
import {
  FormControl as ChakraFormControl,
  Checkbox as ChakraCheckbox
} from '@chakra-ui/core'

export const Container = styled(ChakraFormControl)`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-top: 6px;
  @media (min-width: 375px) {
    padding: 6px 0;
    font-size: 14px;
  }
  @media (min-width: 420px) {
    font-size: 12px;
  }
  @media (min-width: 1600px) {
    font-size: 15px;
  }
`

export const Checkbox = styled(ChakraCheckbox)`
  > div {
    & + div {
      font-size: 12px;
      @media (min-width: 375px) {
        font-size: 14px;
      }
      @media (min-width: 420px) {
        font-size: 12px;
      }
      @media (min-width: 1600px) {
        font-size: 15px;
      }
    }
  }
`
