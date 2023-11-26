import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderSection = () => {
  const images = [
    'https://i.pinimg.com/736x/ba/c1/6e/bac16e9df93c7eeff7ad9268bbb4ad1c.jpg',
    'https://aqiservice.com/wp-content/uploads/2017/06/Quality-Inspection-of-Clothing-and-Textiles-Products.jpg',
    'https://media.licdn.com/dms/image/C4E12AQFKQmd0k2-LGA/article-cover_image-shrink_600_2000/0/1622653770886?e=2147483647&v=beta&t=nk_b4NioQsvIOgn9TJpo3s2V4BaDK5kbNCT-9OpdSow',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className='mt-2 border-8 border-gray-500 '>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
