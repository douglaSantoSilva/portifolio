import { FiMenu, FiX } from 'react-icons/fi'
import { Container } from './styles'
import { MenuImg } from '../MenuImg'

export function NavBar({...rest}) {
  return(
   <>
    <Container {...rest} className='navBar Menu'>
      <MenuImg  icon={FiMenu}/>
    </Container>
    
    <Container {...rest} className='Fix hide'>
      <MenuImg  icon={FiX}/>
    </Container>
   </>
  )
}