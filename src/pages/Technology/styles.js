import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: 
  "header"
  "content";

  height: 100vh;

  @media (max-width: 750px) {
    > main {
      flex-direction: column;

     > section {
    width: 300px;

    img {
      width: 60px;
      height: 60px;
    }}

    > img {
    width: 300px;
    }
  }
}
`

export const Content = styled.main`
  height: 100%;
  padding: 24px;
  gap: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  > section {
    width: 550px;
    padding: 28px;

    border: 1px solid white;
    border-radius: 50px;
    img {
      margin: 10px;
      width: 100px;
      height: 100px;
    }

    .github{
    background-color: white;
    color: blue;

    }
  }

  > img {
    width: 500px;
  }
`