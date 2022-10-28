import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    overflow-x: scroll;
    gap: 20px;
    cursor: pointer;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar-track{
    margin-left: 20px;
  }

  &::-webkit-scrollbar-thumb{
    border: 10px solid transparent;
    color: white;
    background-color:white;
    border-radius: 12px;
    border: 5px solid transparent;
   
    background-clip: padding-box;
  }
`

export const Input = styled.div`
   width: 500px;
   height: 100%;
   padding: 0 48px;
   position: relative;
   

  > input {
    display: none;
  }

  > label {
    cursor: pointer;

    h1{
      display: none;
    }

    img{
     
      margin-top: 50px;
      height: 400px;
      width: 500px;
      border-radius: 50px;
      filter: opacity(0.5);
      object-fit: cover;
      transition: all  0.3s  ease;
    }
    
    > a {
      font-size: 14px;
      position: absolute;
      bottom: 20px;
      padding: 12px;
      border-radius: 20px 8px 20px 8px;
        
      font-weight: bold;
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      background-color:#f0f9ff;
      
      &:hover{
        color: #f0f9ff;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      }
    
    }
    
    > a:nth-child(2) {
    left: 90px;
    }

    > a:nth-child(3) {
    left: 210px;  
    }
  
  }

  > input:checked ~ label{
    > img{ 
      margin-top: 0;
      transition: all  0.3s  ease;
      filter: opacity(1);

      box-shadow: #1f2937 0px 7px 29px 0px;
    }

    > h1 {
      color: ${({theme}) => theme.COLORS.BLUE_050};
      display: block;
     
      margin-top: 20px;
      align-self: center;
      text-align: center;
    }
  }
`
