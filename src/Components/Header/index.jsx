import { Container, Content } from './styles'
import { LinkText } from '../../Components/LinkText'
import { FiUser, FiHome, FiBookOpen} from 'react-icons/fi'
export function Header() {
  return(
    <Container>

      <h1>&#60;&#47;Ds&#62;</h1>
      <Content>
          <ul>
            <li><LinkText title='Home' icon={FiHome}/></li>
            <li><LinkText title='Projetos' icon={FiBookOpen}/></li>
            <li><LinkText title='Contato' icon={FiUser}/></li>
          </ul>
      </Content>
    </Container>
  )
}