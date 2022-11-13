import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  grid-template-rows: 90px 100%;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    display: flex;
    align-items: center;
  }
`

export const Content = styled.section`
  margin: 0 auto;
 
 > div {
  margin-top: 38px;
  }
`

