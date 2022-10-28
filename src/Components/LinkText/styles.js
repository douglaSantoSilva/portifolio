import styled from "styled-components";

export const Container = styled.a`

  display: flex;
  font-weight: 500;
  font-size: 28px;
  gap: 8px;

  align-items: center;
  justify-content: center;
  justify-items: center;

  color: ${({theme}) => theme.COLORS.WHITE_100};

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }

`