// ---Dependencys
import React from 'react';
import './index.less';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';

export default function CarouselSuccess(): React.ReactElement {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };
  return (
    <div className="seccion-4">
      <h1>CONOCE ALGUNOS DE NUESTROS PROYECTOS</h1>
      <br />
      <Carousel
        swipeable
        draggable={false}
        showDots
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Image
          priority
          src="/images/Ecommerce/ecom7.jpeg" // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src="/images/Ecommerce/ecom8.jpeg" // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src="/images/Ecommerce/ecom7.jpeg" // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src="/images/Ecommerce/ecom8.jpeg" // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src="/images/Ecommerce/ecom7.jpeg" // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src="/images/Ecommerce/ecom8.jpeg" // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
      </Carousel>
    </div>
  );
}
