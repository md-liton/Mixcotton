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
            <Sidebar/>
          </div>
          <div className='lg:w-[80%] '>
          <div className="special_main flex items-center justify-center  gap-[30px] flex-wrap">
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
                </div>
            </div>
            <div>
                <div className='relative new_product cursor-pointer'>
                    <div className='w-[300px] h-[300px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full' />
                    </div>
                    <div className='new_btn absolute bottom-0 left-0 w-[300px] ease-in duration-300  bg-[#F5F5F3]  text-white font-normal font-dm rounded-lg'>
                        <div className=' py-[40px] px-[20px] flex justify-center items-center gap-[20px] '>
                            <button className='py-[5px] px-[12px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary'>Add to Cart</button>
                            <button className='py-[5px] px-[12px] text-primary  hover:bg-primary hover:border hove:border-[1px] hover:border-primary hover:text-white  easy-in duration-300 border border-[1px] border-primary'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='py-[20px] px-[10px] font-dm w-[300px] '>
                  <div className=' flex justify-between items-center gap-[30px]'>
                    <span className='text-[20px] font-bold  text-primary'>Basic Crew Neck Tee</span>
                    <span className='text-[15px] font-normal text-secondary'>$50</span>
                  </div>
                <p className='text-[15px] font-normal text-secondary'>Black</p>
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