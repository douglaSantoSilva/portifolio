import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: 
  "header"
  "content";

  > img{
      width: 95%;
    }

  @media (max-width: 700px) {
    .homeMain {
      display: flex;
      align-items: center;
      justify-content: center;
      
      flex-direction: column;
    > section {
      margin: 0 8px;
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

  margin: 80px auto 0;
  gap: 40px;

  > section {
    width: 440px;
    text-align: justify;
    
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 40px;
    }

    h2:nth-child(1) {
      text-align: center;
      margin-top: 24px;
    }

    h2:nth-child(2) {
      color: ${({theme}) => theme.COLORS.BLUE_500};
    }

    .contact {
      h2{
        font-size: 40px;
      }

      a {
      display: flex;
      align-items: center;
      
      margin: 12px 0;
      gap: 8px;
      color: white;

      img {
        width: 50px;
        height: 50px;
      }}

      div{
        display: flex;
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