import styled from "styled-components";


export const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
  
    width: 100%;
    height: 388px;
    gap: 20px;

    cursor: pointer;
    
    > img  {
    width: 60px;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;

    filter: opacity(0.5);
    transition: 1s;
    

    :hover{
      width: 551px;
      filter: opacity(1);

      transition: 1s;
    }}
`

export const Input = styled.div`

  /* width: 100%;
  height: 388px;
  cursor: pointer;

  > label
   {
    img {
    width: 60px;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;

    filter: opacity(0.5);
    transition: 1s; 
  }} */

  > input {
    display: none;
  }

  > label {
    height: 100%;
    position: relative;
    

    h1{
      display: none;
      left: 80px;
      bottom: 20px;
      position: absolute;
    }

    img{  
      height: 388px;
      width: 60px;
      border-radius: 50px;
      object-fit: cover;
      transition: all  0.8s  ease-in-out;

    }
  }

  > input:checked ~ label{
    > img{ 
      width: 600px;
      transition: all  0.8s   ease-in-out;
    }

    > h1 {
      color: ${({theme}) => theme.COLORS.PINK_900};
      display: block;
    }
  }
`
