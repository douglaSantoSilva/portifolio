import linkedinImg from '../../assets/linkedin.svg'
import { FiMessageCircle } from 'react-icons/fi'
import githubImg from '../../assets/github.svg'
import { Container } from './styles'
import { useState } from 'react'


export function ContactButton() {
  
  const [classContact, setClassContact] = useState(false)
  let toggleClassContact = classContact ? '' : 'hide'
  let svgStyle = toggleClassContact ? '' : 'svgStyle'

  function handleContactClick(){
    setClassContact(prevState => !prevState)
  }

  return(
    <Container onClick={handleContactClick}>
      <FiMessageCircle className={svgStyle} />
        <div className={toggleClassContact}>

          <a href="https://www.linkedin.com/in/douglas-santos-ba24a31a5" target='_blank'>
            <img src={linkedinImg} alt="Imagem Logo do Linkedin" />
          </a>
          <a href="https://github.com/douglaSantoSilva" target='_blank'>
            <img src={githubImg} alt="Logo do Github" />
          </a>  

        </div> 
    </Container>
  )
}