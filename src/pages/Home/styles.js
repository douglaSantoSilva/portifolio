import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: 
  "header"
  "content";
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
      font-weight: 700;
      font-size: 40px;
    }

    h2 {
      margin-top: 8px;
    }

    .contact {
      h2{
        font-size: 40px;
      }

      a {
      display: flex;
      align-items: center;

      margin-top: 12px;
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