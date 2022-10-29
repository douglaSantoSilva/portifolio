import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  font-weight: 500;
  font-size: 28px;
  gap: 8px;

  align-items: center;
  justify-content: center;
  justify-items: center;

  color: ${({theme}) => theme.COLORS.WHITE};

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }

`