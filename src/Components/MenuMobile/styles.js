import styled from "styled-components";

export const Container = styled.div`

  position: relative;

  > ul {
    width: 180px;
    height: 150px;
    background-color: ${({theme}) => theme.COLORS.BLUE_800};
    opacity: 0.8;
    z-index: 2;
    position: absolute;
    right: -70px;
    bottom: -120px;
    padding: 12px;
    border-radius: 20px 8px 20px 8px;

    list-style: none;

    li {
      a{
      font-size: 20px;
      padding: 6px 0;
      opacity: 1;
      color: white;
    }}
  }

 
`