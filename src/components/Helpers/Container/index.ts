import styled, { css } from 'styled-components'
import { colors } from '@G.styles/default-styles'

type direction =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

type Prop = {
  direction: direction
  color?: keyof typeof colors
}

export const Container = styled.div<Prop>`
  ${({ direction, color = 'Transparence' }) => css`
    justify-content: ${direction};
    background-color: ${color};
  `}
  display: flex;
  max-width: 100vw;
  margin: 0.5rem;
  align-content: center;
  flex-wrap: wrap;
  flex-flow: row wrap;
  border-radius: 0.3rem;
`
