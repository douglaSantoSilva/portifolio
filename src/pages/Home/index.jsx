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
        <h2>Dev Front-End</h2>
        <p>
        Desde que escrevi o meu primeiro código
        e imprimi meu primeiro 'hello world' me
        apaixonei completamente pela programação, me 
        esforço todos os dias a fim de obter conhecimento 
        para conquistar a minha primeira oportunidade, assim
        indo em busca de me tornar um grande profissional 
        como desenvolvedor. 
        </p>
        <div className='contact'>
          <h2>Contato</h2> 
           <div>
           <a
            href="https://github.com/douglaSantoSilva" 
            target='_blank'><FiGithub className='iconStyleGit'/>
          
            </a>
            <a 
            href="https://www.linkedin.com/in/douglas-santos-ba24a31a5" 
            target='_blank'
            >
            <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
            />
       
            </a>
          </div> 
        <form method='post' action="https://formsubmit.co/douglasantosdev@gmail.com">
          <label htmlFor="name">Nome</label>
          <input 
          type="text" 
          name="name" 
          placeholder='Name'
          id='name'
          required/>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          placeholder='Email'
          id='email'
          name="email" 
          required/>
          <label htmlFor="message">Deixe sua mensagem</label>
          <textarea name="message" placeholder='Digite aqui' id='message'></textarea>
          <button type='submit'>Enviar</button>
        </form>
        </div>
      </section>
    </Content>  
  </Container>
  )
}