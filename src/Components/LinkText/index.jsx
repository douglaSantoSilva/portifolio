import { Container } from './styles'

export function LinkText({icon: Icon, title, ...rest}) {
  return(
    <Container {...rest}>
      {Icon && <Icon size={32}/>}
      {title}
    </Container>
  )
}