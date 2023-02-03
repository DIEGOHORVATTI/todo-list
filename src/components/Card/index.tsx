import { FC } from 'react'
import { Button, Item, Container } from '../index'
import * as S from './styles'
type Prop = {
  title: string
}

const Card: FC<Prop> = ({ title }) => {
  return (
    <Container direction="space-around" color="gray">
      <Container direction="flex-end">
        <Item>
          <S.Title>{title}</S.Title>
        </Item>
      </Container>
      <Container direction="flex-end">
        <Item>
          <Button title="Compilar" />
        </Item>
        <Item>
          <Button title="Deletar" />
        </Item>
      </Container>
    </Container>
  )
}

export default Card
