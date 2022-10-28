import { Container, Input } from './styles'
import BackgroundImg from '../../assets/imagem.png'
import { imagesProjects } from '../ImageProjectsExport'

 export function ProjectsImg() {
  
  return(
    <Container>
      {imagesProjects.map(
          img => 
          <Input>
            <input type="radio" name="slider" id={img.id} defaultChecked/>
            <label htmlFor={img.id}>
            <img src={img.name} alt=""/>
            <a href="">repositório</a>
            <a href="">projeto</a>
            </label>
          </Input> 
          )}
    </Container>
  )
}