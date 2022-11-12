import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 90px auto;
  grid-template-areas: 
  "header"
  "content";
  
  height: 100vh;

  @media (max-width: 750px) {
    > main {
      flex-direction: column;
      padding: 0;
      gap: 0;
 
      .tecBox {
        margin: 8px;
      }

      > div {
        margin-bottom: 40px;
        width: 320px;

        h2 {
          font-size: 32px;
        }

        p {
          font-size:  16px;
        }
      }
     > section {
      justify-content: center;
      padding: 0 0 8px;
      width: 320px;

    }

    > img {
    width: 300px;
    }
  }
}
`

export const Content = styled.main`
  padding: 24px;
  gap: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  grid-area: content;

  > div {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 500px;

    h2 {
      font-size: 32px;
    }

    p {
      text-align: justify;
      font-size: 22px;
    }
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    padding: 28px;
    
    img {
      padding: 8px;
    }
  }

  > img {
    width: 500px;
  }
`