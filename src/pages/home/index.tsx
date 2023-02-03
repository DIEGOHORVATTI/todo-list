import { Button, Input, Card, Item, Container } from '../../components'

const HomeIndex = () => {
  return (
    <>
      <Container direction="center">
        <Item>
          <Input />
        </Item>
        <Item>
          <Button title="OK" />
        </Item>
      </Container>
      <Card title="Adicionar" />
    </>
  )
}

export default HomeIndex
