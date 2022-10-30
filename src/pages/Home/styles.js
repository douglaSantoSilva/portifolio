import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: 
  "header"
  "content";

  img {
    max-width: 500px;
  }

  @media (max-width: 900px) {
  .homeMain {
    display: flex;
    align-items: center;
    justify-content: center;
      
    flex-direction: column;}
  }

  @media (max-width: 750px) {
  .homeMain {
    display: flex;
    align-items: center;
    justify-content: center;
      
    flex-direction: column;
    
    > section {
      width: 350px;
    }

    > img {
      width: 60%;
    }
    }
  }
`

export const Content = styled.main`
  grid-area: content;
  display: flex;

  margin: 40px auto 0;
  gap: 50px;

  > section {
    width: 400px;
    text-align: justify;
    
  form {

    fieldset {
      border: 0;
    }

    input, textarea {
      margin: 2px 0;
      outline-color: ${({theme}) => theme.COLORS.BLUE_500};
    }

    input, button, textarea {
      width: 100%;
      padding: 8px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      background-color: ${({theme}) => theme.COLORS.WHITE_100};
      border: none;
      border-radius: 10px;
      font-weight: bold;
    }

    textarea{
      resize: none;
      height: 70px;
    }

    button {
      background-color: ${({theme}) => theme.COLORS.BLUE_500};
      margin: 12px 0 80px;
    }

    legend{
      font-size: 32px;
      text-align: center;
      margin-top: 12px;
      font-weight: bold;
    }
    }

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 32px;
    }

    h2{
      color: ${({theme}) => theme.COLORS.BLUE_500};
    }
  }
`