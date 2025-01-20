import React from 'react'
import newimg from '../../assets/new.png'
import Sidebar from '../Sidebar/Sidebar'


const Product = () => {
  return (
    <section className='py-[50px]'>
      <div className="container">
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Products</h5>
        <div className='flex gap-[20px]'>
          <div className='lg:w-[20%] '>
            <Sidebar />
          </div>
          <div className='lg:w-[80%] '>
            <div className="special_main flex items-center justify-center  gap-[30px] flex-wrap">
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
              <div>
                <div className='relative new_product cursor-pointer'>
                  <div className='md:w-[300px] md:h-[300px] w-[125px] h-[125px] rounded-lg overflow-hidden '>
                    <img src={newimg} alt="img" className='w-full h-full' />
                  </div>
                  <div className='new_btn absolute bottom-0 left-0 w-[300px]  ease-in duration-300 bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg hidden md:block'>
                    <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                      <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                      <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                    </div>
                  </div>
                </div>
                <div className=' font-dm md:w-[300px] w-[125px] '>
                  <div className='flex justify-between items-center md:gap-[30px]  font-dm md:w-[300px] w-[125px]'>
                    <span className='md:text-[20px] text-[12px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='md:text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                  <p className='md:text-[15px] text-[12px] font-normal text-secondary'>Black</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product