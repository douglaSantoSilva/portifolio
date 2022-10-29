import { Container } from './styles'
import { LinkText } from '../../Components/LinkText'
import { NavBar } from '../NavBar'

export function MenuMobile() {
  
  function handleClick(){
    const myListBar = document.querySelector('.myListBar')
    const Menu = document.querySelector('.Menu')
    const Fix = document.querySelector('.Fix')
    
    myListBar.classList.toggle('hide')
    Menu.classList.toggle('hide')
    Fix.classList.toggle('hide')
  }
  
  
  return(
    <Container className='menuMobile'>
      <NavBar onClick={handleClick}/>
      <ul className='myListBar hide'>
        <li><LinkText title='Home' /></li>
        <li><LinkText title='Projetos' /></li>
        <li><LinkText title='Contato' /></li>
      </ul>
    </Container>
  )
}