import { Container, Content } from './styles'
import { LinkText } from '../../Components/LinkText'
import { FiUser, FiHome, FiBookOpen} from 'react-icons/fi'
export function Header() {
  return(
    <Container>
      <h1>&#60;Douglas Santos&#47;&#62;</h1>
      <Content>
          <ul>
            <li key={111}><LinkText  title='Home' icon={FiHome} /></li>
            <li key={2222}><LinkText title='Projetos' icon={FiBookOpen} /></li>
            <li key={3333}><LinkText title='Contato' icon={FiUser} /></li>
          </ul>
      </Content>
    </Container>
  )
}