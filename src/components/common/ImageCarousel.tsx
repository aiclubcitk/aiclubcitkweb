import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ImageCarousel.module.css';
import { StaticImageData } from 'next/image';
import {carouselImages } from "@/utils/carousel";



const ImageCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000} // Change the interval as needed
      stopOnHover={true}
      className={styles.carousel}
    >
      {carouselImages.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
