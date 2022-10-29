import {Container, Content} from './styles'
import { Header } from '../../Components/Header'
import imgProfile from '../../assets/profileDatails.svg'
import { FiGithub, FiMail } from 'react-icons/fi'

export function Home() {
  return(
  <Container>
    <Header />
    <Content className='homeMain'>
    <img src={imgProfile} alt="" />
      <section>
        <h1>Sobre Mim</h1>
        <h2>Minas Gerais - Ribeirão das Neves</h2>
        <p>
        Desde o primeiro “hello World” me apaixonei pela programação,
        hoje me esforço todos os dias para me tornar um desenvolvedor 
        full stack e conquistar minha primeira vaga como junior, sendo 
        0,01% melhor a cada dia.
        </p>

        <div className='contact'>
          <h2>Contato</h2>
          <div>
            <a
            href="https://github.com/douglaSantoSilva" 
            target='_blank'><FiGithub className='iconStyleGit'/>
            GitHub
            </a>
            <a 
            href="https://www.linkedin.com/in/douglas-santos-ba24a31a5" 
            target='_blank'
            >
            <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
            />
              Linkein
            </a>
          </div>
        <a href=""><FiMail className='iconStyleGit'/>douglasantosilvaemail@gmail.com</a>
        </div>
      </section>
    </Content>  
  </Container>
  )
}