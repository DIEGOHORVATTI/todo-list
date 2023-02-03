import { FC } from 'react'
import * as S from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

const Button: FC<ButtonProps> = ({ title }) => {
  return <S.Button>{title}</S.Button>
}

export default Button
