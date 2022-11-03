import {Container, Content} from './styles'
import { Header } from '../../Components/Header'
import { Carousel } from '../../Components/Carousel'
import { ContactButton } from '../../Components/ContactButton'
export function Projects() {
  return(
    <Container>
        <Header />
        <main>
          <Content>
              <Carousel />
          </Content>
        </main>
        <ContactButton />
    </Container>
  )
}