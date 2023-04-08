import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Silder = () => {
  return (
    
    <Carousel  responsive={responsive}>
      <div>
        <img style={{width:432,height:386}} src="/img/slider1.png" alt="slider" />
      </div>
      <div>
        <img src="/img/slider2.png" alt="slider" />
      </div>
      <div>
        <img src="/img/slider3.png" alt="slider" />
      </div>
      <div>
        <img src="/img/slider1.png" alt="slider" />
      </div>
    </Carousel>

  );
};

export default Silder;
