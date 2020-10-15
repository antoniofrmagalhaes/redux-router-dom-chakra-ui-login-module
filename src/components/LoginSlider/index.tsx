import React from 'react'

import { Container, Content, Dots, Dot } from './styles'

const LoginSlider: React.FC = () => {
  return (
    <Container>
      <Content>
        <h4>Keeping the overview</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi
          suscipit totam repellar.
        </p>
      </Content>
      <Dots>
        <Dot active />
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Container>
  )
}

export default LoginSlider
