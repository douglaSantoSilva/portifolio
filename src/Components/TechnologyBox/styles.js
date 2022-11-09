import styled from "styled-components";

export const Container = styled.div`
  /* background-color:#18181b; */
  margin: 12px;
  border-radius: 8px;
  border: 2px solid transparent;
  
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  img {
      margin: 10px;
      width: 100px;
      height: 100px;
    }

  :hover {
    border: 2px solid ${({theme}) => theme.COLORS.BLUE_500};
    
    transition: 1s;
  }
`