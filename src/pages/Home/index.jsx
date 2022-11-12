import imgProfile from '../../assets/profileDatails.svg'
import { Header } from '../../Components/Header'
import { Container, Content} from './styles'
import { ContactButton } from '../../Components/ContactButton'

export function Home() {
  return(
  <Container>
    <Header />
    <Content className='homeMain'>
    <img src={imgProfile} alt="desenho de um rapaz ao lado dele um quadrado com um campo de perfil de usuário." />
      
      <section>
        <h1>
          Olá! meu nome é <br/> 
          <span>Douglas </span> <br/> 
           sou
          <span> Dev Front-End</span>.
        </h1>
        
        <p>
        Todos os dias me esforço a fim de aprimorar 
        minhas habilidades, em busca de ser um
        excelente profissional e conquistar a minha primeira oportunidade 
        como dev.
        </p>

      </section>        
    </Content> 

    <ContactButton />
  </Container>
  )
}