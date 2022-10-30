import { Container } from './styles'
import { FiMessageCircle } from 'react-icons/fi'
import linkedinImg from '../../assets/linkedin.svg'
import githubImg from '../../assets/github.svg'

function buttonOnClick(){
 const myContact = document.querySelector('.myContact')

  myContact.classList.toggle('hide')

  console.log('passei por aqui')
}


export function Contact() {
  return(
    <Container onClick={buttonOnClick}>
      <FiMessageCircle />
        <div className='myContact hide'>
          <a href=""><img src={linkedinImg} alt="" /></a>
          <a href=""><img src={githubImg} alt="" /></a>  
        </div> 
    </Container>
  )
}