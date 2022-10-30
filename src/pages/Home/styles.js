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
      display: flex;
      flex-direction: column;

      input, button, textarea {
        width: 100%;
        padding: 8px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        background-color: ${({theme}) => theme.COLORS.WHITE_100};
        border: none;
        outline: none;
        border-radius: 10px;
        font-weight: bold;
      }

      label {
        margin-bottom: 2px;
      }

      textarea{
        resize: none;
        height: 70px;
      }

      button {
        background-color: ${({theme}) => theme.COLORS.BLUE_500};
        margin: 8px 0;
      }
    }

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 36px;
    }

    h2:nth-child(1) {
      text-align: center;
      margin-top: 12px;
    }

    h2:nth-child(2) {
      color: ${({theme}) => theme.COLORS.BLUE_500};
    }

    .contact {
      h2{
        font-size: 36px;
      }

      a, p {
      display: flex;
      align-items: center;
      
      margin: 8px 0;
      gap: 6px;
      color: white;

      img {
        width: 50px;
        height: 50px;
      }}

      > div {
        display: flex;
        justify-content: center;
        gap: 12px;
      }
    }
  }

  .iconStyleGit {
    font-size: 50px;
    color: white;
    > path {
      fill: #60a5fa;
    }
  }
`