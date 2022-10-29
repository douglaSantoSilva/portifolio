import { Container } from './styles'

export function MenuImg({icon: Icon,...rest}) {
  return(
    <Container {...rest}>
      <Icon {...rest}/>
    </Container>
  )
}