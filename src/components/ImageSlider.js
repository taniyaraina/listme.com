import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="images/sliderone.png" alt="mock-up" />
        </div>
        <div>
          <img src="images/slidertwo.png" alt="mock-up" />
        </div>
        <div>
          <img src="images/sliderthree.png" alt="mock-up" />
        </div>
        <div>
          <img src="images/sliderfour.png" alt="mock-up" />
        </div>
        <div>
          <img src="images/sliderfifth.png" alt="mock-up" />
        </div>
        <div>
          <img src="images/slidersixth.png" alt="mock-up" />
        </div>
      </Slider>
    </div>
  );
};
export default ImageSlider;
