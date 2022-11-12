import { Container } from './styles'

export function LinkText({icon: Icon, title, ...rest}) {
  return(
    <Container {...rest}>
      {title}
      {Icon && <Icon />}
    </Container>
  )
}