import React from 'react'
import styled from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 18pt;
`

export const BemVindo = (props: any) => {
  return (
    <div>
      <h4>
        Bem vindo(a) {props.nome} vc tem {props.idade} anos
      </h4>
    </div>
  )
}

const Aula_1 = () => {
  return (
    <Title>
      <BemVindo nome="Nami" idade="20" />
      <BemVindo nome="Zoro" idade="22" />
      <BemVindo nome="Ussop" idade="19" />
    </Title>
  )
}

export default Aula_1
