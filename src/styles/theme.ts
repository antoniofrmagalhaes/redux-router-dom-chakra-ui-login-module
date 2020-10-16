import { theme, DefaultTheme } from '@chakra-ui/core'

interface ICustomThemeProps extends DefaultTheme {
  app: {
    primary: string
    secondary: string
    success: string
    error: string
    warning: string
    info: string
    border: string
    background: string
    primaryTextColor: string
    secondaryTextColor: string
  }
}

const customTheme: ICustomThemeProps = {
  ...theme,
  app: {
    primary: '#5b24c2',
    secondary: '#00b2a9',
    success: '#3feb1c',
    error: '#ff2436',
    warning: '#f0ec26',
    info: '#24aec9',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#2e2e2e',
    border: '#dddddd',
    background: '#f1f1f1'
  },
  fonts: {
    body: 'Arial, Helvetica, system-ui, sans-serif',
    heading: 'Arial, Helvetica, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  radii: {
    ...theme.radii,
    sm: '2px',
    md: '8px'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700
  }
}

export default customTheme
