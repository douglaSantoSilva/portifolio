import styled from "styled-components";

export const Container = styled.div`
  max-width: 650px;
  max-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  
  .swiper {
  width: 100%;
  height: 100%;

  border-radius: 20px;
  box-shadow: ${({theme}) => theme.COLORS.BLUE_900} 0px 7px 29px 0px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
 
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.swiper-slide a {
  font-size: 14px;
  font-weight: bold;
  
  position: absolute;
  padding: 8px;
  bottom: 20px;
  right: 20px;

  border-radius: 12px 6px 12px 6px;
  background-color: ${({theme}) => theme.COLORS.BLUE_400};
}

.anchorProject{
 svg{
  font-size: 24px;
 }  
}

.swiper-pagination-bullet {
  opacity: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
}

.swiper-pagination-bullet-active {
  background-color: ${({theme}) => theme.COLORS.BLUE_800};
}
` 