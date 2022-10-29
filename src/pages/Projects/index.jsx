import {Container, Content} from './styles'
import { Header } from '../../Components/Header'
import { Carousel } from '../../Components/Carousel'

export function Projects() {
  return(
    <Container>
        <Header />
        <main>
          <Content>
              <Carousel />
          </Content>
        </main>
    </Container>
  )
}