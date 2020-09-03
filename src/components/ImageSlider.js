import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const ImageItem = [
  {
    image: 'images/sliderone.png',
  },
  {
    image: 'images/slidertwo.png',
  },
  {
    image: 'images/sliderthree.png',
  },
  {
    image: 'images/sliderfour.png',
  },
  {
    image: 'images/sliderfifth.png',
  },
  {
    image: 'images/slidersixth.png',
  },
];

const Wrapper = styled.div`
  .slick-slide {
    outline: none;
  }
`;

const ImageSlider = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {ImageItem.map(item => (
          <div>
            <img src={item.image} alt="appImage" />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};
export default ImageSlider;
