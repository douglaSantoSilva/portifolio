import styled from "styled-components";

export const Container = styled.div`
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.COLORS.WHITE_100};
  
  position: absolute;
  top: -20px;
  right: -70px;
  
  padding: 12px;
  border-radius: 20px 20px 20px 20px;
`
