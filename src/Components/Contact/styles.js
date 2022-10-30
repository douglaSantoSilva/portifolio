import styled from "styled-components";

export const Container = styled.button`
    width: 50px;
    height: 50px;
    
    //posição inicial!
    bottom: 20px;
    right: 24px;
    position: fixed;
    
    border: none;
    background-color: transparent;

    > svg {
      font-size: 50px;
      color: ${({theme}) => theme.COLORS.WHITE_100};

      path {
        fill: ${({theme}) => theme.COLORS.BLUE_500};
      }
    }

    > div {
      > a img {
      background-color: white;
      border-radius: 50%;
      position: fixed;
      width:  50px;
      height: 50px;
      bottom: 70px;
      right: 20px;
      animation: contact 700ms forwards;
    }

    > a:nth-child(1) img{
      background-color: ${({theme}) => theme.COLORS.BLUE_800};
    }

   > a:nth-child(2) {
      img {
        bottom: 44px;
        right: 68px;
      }
   }
    }

`