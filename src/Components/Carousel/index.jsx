import { Container } from './styles'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {imagesProjects} from '../ImageProjectsExport'
import { FiFolder } from 'react-icons/fi'

import "./styles.js";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel() {
  
  return(
      <Container>  
        <Swiper
          loop={false}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper">
         
          {imagesProjects.map((image, index) => 
            <SwiperSlide key={String(index)}> 
            <img src={image.name} alt={image.alt} /> 
            <a 
              href={image.url}
              className='anchorProject' 
              target="_blank"
              >
              <FiFolder/>
                Repositório
              </a>
            </SwiperSlide> 
          )}
        </Swiper>
    </Container>
  )
}