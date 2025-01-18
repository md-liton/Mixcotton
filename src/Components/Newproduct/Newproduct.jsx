import React, { useEffect } from 'react'
import newimg from '../../assets/new.png'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Newproduct = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };
  return (
      <section className='md:py-[50px] py-[30px] bg-[#F5F5F3]'>
          <div className="container">
              <div className="new_main ">
                  <div className="slider-container">
                      <Slider {...settings}>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='md:w-[370px] md:h-[370px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center md:gap-[30px]  md:py-[20px] py-[10px] md:px-[10px] font-dm md:w-[370px] w-[125px]'>
                                  <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='md:w-[370px] md:h-[370px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center md:gap-[30px]  md:py-[20px] py-[10px] md:px-[10px] font-dm md:w-[370px] w-[125px]'>
                                  <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='md:w-[370px] md:h-[370px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center md:gap-[30px]  md:py-[20px] py-[10px] md:px-[10px] font-dm md:w-[370px] w-[125px]'>
                                  <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='md:w-[370px] md:h-[370px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center md:gap-[30px]  md:py-[20px] py-[10px] md:px-[10px] font-dm md:w-[370px] w-[125px]'>
                                  <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='md:w-[370px] md:h-[370px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center md:gap-[30px]  md:py-[20px] py-[10px] md:px-[10px] font-dm md:w-[370px] w-[125px]'>
                                  <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='md:w-[370px] md:h-[370px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center md:gap-[30px]  md:py-[20px] py-[10px] md:px-[10px] font-dm md:w-[370px] w-[125px]'>
                                  <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Newproduct