import React from 'react'
import { Box } from '@chakra-ui/core'

import Drawer from '../../../components/Drawer'
import Profile from '../../../components/Profile'

import { ContentContainer, Content } from './styles'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Box width="100%" height="100vh" position="relative" overflow="hidden">
      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>
      <Drawer orientation="right">
        <Profile />
      </Drawer>
    </Box>
  )
}

export default DefaultLayout
