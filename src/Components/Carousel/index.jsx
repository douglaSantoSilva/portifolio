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
      <Container className='asdadsasd'>  
        <Swiper
          loop={true}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper">
         
          {imagesProjects.map(image => 
            <SwiperSlide key={image.name}> 
            <img src={image.name} alt="" /> 
            <a 
              href={image.url}
              className='anchorProject' 
              icon={FiFolder}
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