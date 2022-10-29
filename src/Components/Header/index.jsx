import { Container, Content } from './styles'
import { LinkText } from '../../Components/LinkText'
import { FiSmartphone, FiHome, FiBookOpen} from 'react-icons/fi'
import { MenuMobile } from '../MenuMobile'

export function Header() {

  return(
    <Container>
      <h1>&#60;Douglas Santos&#47;&#62;</h1>
      <MenuMobile className='Menu'/>
      <Content className='navListHeader'>
          <ul>
            <li><LinkText className="anchorNav" title='Home' icon={FiHome} /></li>
            <li><LinkText className="anchorNav" title='Projetos' icon={FiBookOpen} /></li>
            <li><LinkText className="anchorNav" title='Tecnologias' icon={FiSmartphone} /></li>
          </ul>
      </Content>
    </Container>
  )
}