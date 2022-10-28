import { Container } from './styles'

export function LinkText({icon: Icon, title, ...rest}) {
  return(
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}