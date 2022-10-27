import { Container, Input } from './styles'
import BackgroundImg from '../../assets/imagem.png'
import { useState } from 'react'


export function ProjectsImg({isActive = false, ...rest}) {
  
  return(
    <Container>

      <Input>
        <input type="radio" name="slider" id='slider1' defaultChecked />
        <label htmlFor="slider1">
          <img src={BackgroundImg} alt=""/>
        </label>
      </Input>

      <Input>
        <input type="radio" name="slider" id='slider2' defaultChecked />
        <label htmlFor="slider2">
          <img src={BackgroundImg} alt=""/>
        </label>
      </Input>

      <Input>
        <input type="radio" name="slider" id='slider3' defaultChecked />
        <label htmlFor="slider3">
          <img src={BackgroundImg} alt=""/>
          <h1>Testando</h1>
        </label>
        
      </Input>

      <Input>
        <input type="radio" name="slider" id='slider4' defaultChecked />
        <label htmlFor="slider4">
          <img src={BackgroundImg} alt=""/>
        </label>
      </Input>
      
    </Container>
  )
}