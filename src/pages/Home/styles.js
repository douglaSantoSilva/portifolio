import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 90px 100%;
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
      width: 300px;

      h1 {
        font-size: 32px;
      }
    }

    > img {
      width: 70%;
    }
    }
  }
`

export const Content = styled.main`
  grid-area: content;
  display: flex;
  align-items: center;

  margin: 40px auto 0;
  gap: 50px;

  > section {
    width: 500px;

    h1 {
      text-align: start;
      font-weight: 700;
      font-size: 42px;

      span {
        color: ${({theme}) => theme.COLORS.BLUE_500};
      }
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`