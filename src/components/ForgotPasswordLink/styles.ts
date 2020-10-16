import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.app.primary};
  opacity: 0.8;
  transition: color 250ms ease, opacity 250ms ease;

  &:hover,
  &:active {
    opacity: 1;
  }

  @media (min-width: 1024px) {
    font-size: 12px;
  }

  @media (min-width: 1600px) {
    font-size: 15px;
  }
`
