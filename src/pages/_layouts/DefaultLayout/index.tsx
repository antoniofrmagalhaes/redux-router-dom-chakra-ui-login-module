import { Box } from '@chakra-ui/core'
import React from 'react'

import Drawer from '../../../components/Drawer'

import { ContentContainer, Content } from './styles'

import Profile from '../../../components/Profile'

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
