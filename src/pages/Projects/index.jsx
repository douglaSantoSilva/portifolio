import {Container, Content} from './styles'
import { Header } from '../../Components/Header'
import { ProjectsImg } from '../../Components/ProjectsImg'

export function Projects() {
  return(
    <Container>
        <Header />
        <main>
          <Content>
              <ProjectsImg />
          </Content>
        </main>
    </Container>
  )
}