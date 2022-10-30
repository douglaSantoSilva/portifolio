import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;

  grid-area: header;
  border-bottom-width: 1px;
  border-bottom-color: transparent;
  border-image: linear-gradient(270deg, rgba(100,226,157,1) 4%, rgba(34,178,195,1) 58%, rgba(156,45,253,1) 100%);
  border-bottom-style: solid;
  border-image-slice: 1;

  > h1 {
    font-weight: 700;
    font-size: 32px;
    margin-right: 144px;
    transition: 1s;
  }

  .anchorNav:hover{
    color: ${({theme}) => theme.COLORS.BLUE_500};  
    svg {
      color: ${({theme}) => theme.COLORS.BLUE_500};
    }}

  .menuMobile{
    display: none;
  }

  @media (max-width:900px) {
    h1 {
      font-size: 28px;
      margin-right: 15px;
    }
}

  @media (max-width:750px) {
    .navListHeader {
    display: none;
    }

    h1 {
      
      margin-right: 0px;
    }

    .menuMobile{
    display: flex;
  }}
`

export const Content = styled.nav`
  > ul {
    display: flex;
    list-style:none;
    gap: 24px;
  }
`