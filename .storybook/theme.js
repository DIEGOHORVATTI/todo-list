import { create } from '@storybook/theming'
import { colors } from 'styles/default-styles'

export default create({
  base: 'dark',

  colorSecondary: `${colors.primary}`,

  appBg: '#0b0a0d',
  appContentBg: '#16161A',
  appBorderColor: `${colors.primary}`,

  textColor: '#fff',

  barTextColor: '#E6E6E6',
  barSelectedColor: '#ffffff',
  barBg: '#1b1a1f',

  brandTitle: 'Leadeasy - StoryBook',
})
