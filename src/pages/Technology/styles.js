import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: 
  "header"
  "content";

  height: 100vh;
`

export const Content = styled.main`
  height: 100%;
  padding: 24px;
  gap: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  > section {
    max-width: 550px;
    padding: 28px;

    border: 1px solid white;
    border-radius: 50px;
    img {
      margin: 10px;
      width: 100px;
      height: 100px;
    }
  }

  > img {
    width: 500px;
  }
`