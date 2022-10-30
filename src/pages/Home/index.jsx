import imgProfile from '../../assets/profileDatails.svg'
import { Contact } from '../../Components/Contact'
import { Header } from '../../Components/Header'
import { Container, Content} from './styles'

export function Home() {
  return(
  <Container>
    <Header />
    <Content className='homeMain'>
    <img src={imgProfile} alt="desenho de um rapaz ao lado dele um quadrado com um campo de perfil de usuário." />
      <section>
        <h1>Sobre Mim</h1>
        <h2>Dev Front-End</h2>
        <p>
        Desde que escrevi o meu primeiro código e imprimi meu 'hello world'
        me apaixonei completamente pela programação. Hoje me esforço todos
        os dias, a fim de aprimorar minhas habilidades, em busca de ser um
        excelente profissional e conquistar a minha primeira oportunidade 
        como dev.
        </p>
        <div className='contact'>
        <form method='post' action="https://formsubmit.co/douglasantosdev@gmail.com">
          <fieldset>
            <legend>Contato</legend>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" placeholder='Name'id='name'required/>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Email'id='email'name="email" required/>    
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" placeholder='Digite aqui' id='message'></textarea>
          </fieldset>
          <button type='submit'>Enviar</button>
        </form>
        </div>
      </section>
      <Contact />
    </Content>  
  </Container>
  )
}