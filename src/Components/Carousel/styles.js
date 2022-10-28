import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  height: 480px;
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
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  opacity: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
}

.swiper-pagination-bullet-active {
  background-color: ${({theme}) => theme.COLORS.BLUE_800};
}
` 