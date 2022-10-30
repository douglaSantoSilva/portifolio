import linkedinImg from '../../assets/linkedin.svg'
import { FiMessageCircle } from 'react-icons/fi'
import githubImg from '../../assets/github.svg'
import { Container } from './styles'

function buttonOnClick(){
 const myContact = document.querySelector('.myContact')

  myContact.classList.toggle('hide')
}

export function Contact() {
  return(
    <Container onClick={buttonOnClick}>
      <FiMessageCircle />
        <div className='myContact hide'>

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