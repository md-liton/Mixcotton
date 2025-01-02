import React from 'react'
import banner from '../../assets/Banner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
      };
  return (
      <section >
          <div className="banner_main overflow-hidden">
              <Slider {...settings} className='mx-[-20px]'>
                  <div>
                      <img src={banner} alt="img" className='w-full' />
                  </div>
                  <div>
                      <img src={banner} alt="img" className='w-full' />
                  </div>
                  <div>
                      <img src={banner} alt="img" className='w-full' />
                  </div>
              </Slider>
          </div>
      </section>
  )
}

export default Banner