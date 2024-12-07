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
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
  return (
      <section className='py-[50px] bg-[#F5F5F3]'>
          <div className="container">
              <div className="new_main ">
                  <div className="slider-container">
                      <Slider {...settings}>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
                              </div>
                          </div>
                          <div>
                              <div className='relative new_product cursor-pointer'>
                                  <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                                      <img src={newimg} alt="img" className='w-full h-full' />
                                  </div>
                                  <div className='new_btn absolute bottom-0 left-0 w-[370px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                                      <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                                          <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-between items-center gap-[30px] py-[20px] px-[10px] font-dm w-[370px] '>
                                  <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                                  <span className='text-[15px] font-normal text-secondary'>$50</span>
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