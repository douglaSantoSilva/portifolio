import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;

  grid-area: header;

  > h1 {
    font-weight: 700;
    font-size: 64px;
    //maybe position fixed
    margin-right: 144px;
    transition: 1s;
    
    :hover{
      color:  ${({theme}) => theme.COLORS.PINK_900};
      transition: 1s;
    }
  
  }
`

export const Content = styled.nav`
  
  > ul {
    display: flex;
    list-style:none;
    gap: 24px;
  }

`