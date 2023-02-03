import styled from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 18pt;
  margin: 0.5rem;
`

export const Equipe = (props: any) => {
  return (
    <div>
      <h4>Nome: {props.nome}</h4>
      <h4>Cargo: {props.cargo}</h4>
      <h4>Salario: {props.salario}</h4>
      <br />
    </div>
  )
}

export const Sobre = (props: any) => {
  return (
    <div>
      <h4>Nome: {props.nome}</h4>
      <br />
    </div>
  )
}

const Aula_3: React.FC = () => {
  return (
    <Title>
      <div>Conheça nossa equipe</div>
      <br />
      <Equipe nome="Nami" cargo="20" salario="100" />
      <Equipe nome="Zoro" cargo="22" salario="200" />
      <Equipe nome="Ussop" cargo="19" salario="300" />
    </Title>
  )
}

export default Aula_3
