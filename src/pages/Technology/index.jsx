import { Header } from '../../Components/Header'
import {Container, Content} from './styles'
import {TechnologyBox} from '../../Components/TechnologyBox'
import { ImgTechs } from '../../Components/ImageProjectsExport/index'

export function Technology() {
  
  function handleChangeText(text, title) {
    const textDiv = document.querySelector("p.tecContent")
    const textH2 = document.querySelector("h2.tecContent")

    textDiv.textContent = text
    textH2.textContent = title
  }

  function handleEmpty() {
    const textDiv = document.querySelector("p.tecContent")
    const textH2 = document.querySelector("h2.tecContent")

    textDiv.textContent = "Passe o mouse por cima da tecnologia para obter mais informações."
    textH2.textContent = "Tecnologias"
  }
  
  return(
    <Container>
      <Header />
      <Content>
        <div>
          <h2 className='tecContent'>Tecnologias</h2>
          <p className='tecContent'>Passe o mouse por cima da tecnologia para obter mais informações.</p>
        </div>
        <section>
          {
            ImgTechs.map((img, index) => (
              <TechnologyBox 
                src={img.name} 
                key={String(index)} 
                onMouseOver={() => handleChangeText(img.description, img.title)} 
                onMouseLeave={handleEmpty}  
              />
            ))
          }   
        </section>
      </Content>
    </Container>
  )
}