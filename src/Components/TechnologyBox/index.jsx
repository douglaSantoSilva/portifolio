import { Container } from './styles'

export function TechnologyBox({...rest}) {
  return( 
    <Container className='tecBox'>
      <img {...rest} />
    </Container>
  )
}