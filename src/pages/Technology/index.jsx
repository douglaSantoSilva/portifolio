import { Header } from '../../Components/Header'
import {Container, Content} from './styles'

export function Technology() {
  return(
    <Container>
      <Header />
      <Content>
        <img src='https://raw.githubusercontent.com/Sabyasachi-Seal/Sabyasachi-Seal/ouput/coder.gif' alt="gif de uma pessoa usando o computador" />
        <section>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='logo javascript'/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='logo css3'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='logo html5'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='logo nodejs'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  alt='logo react'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"  alt='logo sqlite'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  alt='logo git'/>      
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt='logo visual studio'/>
        </section>
      </Content>
    </Container>
  )
}