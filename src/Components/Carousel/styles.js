import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  
  .swiper {
  max-width: 650px;
  max-height: 500px;
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

  color: ${({theme}) => theme.COLORS.WHITE_100};
  border-radius: 12px 6px 12px 6px;
  background-color: ${({theme}) => theme.COLORS.BLUE_400};
}

.anchorProject {
 svg{
  font-size: 24px;
 }  
}

a.anchorProject {
  display: flex;
  align-items: center;
  gap: 6px;
}

.swiper-pagination-bullet {
  opacity: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
}

.swiper-pagination-bullet-active {
  background-color: ${({theme}) => theme.COLORS.BLUE_800};
}

@media (max-width: 750px) {

.swiper {
  max-width: 330px;
  max-height: 380px;
}
.swiper-slide img {
  height: 380px;
}
.swiper-slide a {
  bottom: 60px;
}}
` 