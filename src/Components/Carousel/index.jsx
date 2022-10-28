import { Container } from './styles'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {imagesProjects} from '../ImageProjectsExport'

import "./styles.js";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel() {
  
  return(
      <Container>  
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper">
         
          {imagesProjects.map(image => 
            <SwiperSlide key={image.name}> <img src={image.name} alt="" /> </SwiperSlide> 
          )}
        </Swiper>
    </Container>
  )
}