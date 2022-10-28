import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  grid-template-rows: 120px auto 100px;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  > main {
    height: 100%;
    grid-area: content;
    margin: 0 auto;
  }
`

export const Content = styled.section`
  margin: 0 auto;
 
 > div {
  margin-top: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  
  }
`

