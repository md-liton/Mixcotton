import React from 'react'
import { IoClose } from "react-icons/io5";
import cart from '../../assets/cart.png'


const Cart = () => {
  return (
    <section className='py-[30px] font-dm'>
        <div className="container">
            <div className="cart_main">
            <div>
            <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Cart</h5>
            <div className='p-[20px] bg-[#F5F5F3] flex justify-between items-center'>
                <div className='w-1/4'>
                <h5 className='font-bold text-[16px] text-primary'>Product </h5>
                </div>
                <div className='w-1/4'>
                <h5 className='font-bold text-[16px] text-primary'>Price</h5>
                </div>
                <div className='w-1/4'>
                <h5 className='font-bold text-[16px] text-primary'>Quantity</h5>
                </div>
                <div className='w-1/4'>
                <h5 className='font-bold text-[16px] text-primary'>Total</h5>
                </div>
            </div>
            <div className='border-2 border-[#F5F5F3] p-[30px] flex items-center justify-between gap-[20px]'>
                <div className='w-1/4 flex items-center gap-[5px]'>
                <IoClose className='cursor-pointer'/>
                <div className='w-[100px] h-[100px] '>
                <img src={cart} alt="img" className='w-full h-full' />
                </div>
                <p className='font-bold text-[16px] text-primary'>Product name</p>
                </div>
                <div className='w-1/4'>
                <p className='font-bold text-[16px] text-primary'>$44.00</p>
                </div>
                <div className='w-1/4'>
                          <div className='border border-2 py-[3px] px-[20px] flex items-center justify-between gap-[30px] text-secondary w-[200px] '>
                              <span className='cursor-pointer text-[23px]'>-</span>
                              <span>0</span>
                              <span className='cursor-pointer text-[20px]'>+</span>
                          </div>
                </div>
                <div className='w-1/4'>
                <p className='font-bold text-[16px] text-primary'>$44.00</p>
                </div>
            </div>
                  <div className='border-x-2 border-b-2 border-[#F5F5F3] p-[10px] '>
                      <select className=' border-2 focus:outline-none  font-bold text-[#6D6D6D] text-[14px] px-[25px]'>
                          <option>SIZE</option>
                          <option>S</option>
                          <option>M</option>
                          <option>LG</option>
                          <option>XL</option>
                          <option>XXL</option>
                      </select>
                  </div>
            </div>
                  <div className='price flex justify-end'>
                      <div className='w-1/3 py-[30px]'>
                          <h5 className='font-bold text-[16px] text-primary text-end px-[10px]'>Cart totals</h5>
                          <div className='border-2 border-[#F5F5F3] p-[10px] flex items-center justify-between mt-[15px]'>
                              <div className='w-1/2 border-r-2 border-[#F5F5F3]'>
                                  <h5 className='font-bold text-[14px] text-primary px-[10px]'>Subtotal</h5>
                              </div>
                              <div className='w-1/2'>
                                  <h5 className='text-[#6D6D6D] text-[14px] px-[10px]'>$44.00</h5>
                              </div>
                          </div>
                          <div className='border-x-2 border-[#F5F5F3] p-[10px] flex items-center justify-between '>
                              <div className='w-1/2 border-r-2 border-[#F5F5F3]'>
                                  <h5 className='font-bold text-[14px] text-primary px-[10px]'>Discount</h5>
                              </div>
                              <div className='w-1/2'>
                                  <h5 className='text-[#6D6D6D] text-[14px] px-[10px]'>$4.00</h5>
                              </div>
                          </div>
                          <div className='border-2 border-[#F5F5F3] p-[10px] flex items-center justify-between '>
                              <div className='w-1/2 border-r-2  border-[#F5F5F3]'>
                                  <h5 className='font-bold text-[14px] text-primary px-[10px]'>Total</h5>
                              </div>
                              <div className='w-1/2'>
                                  <h5 className='text-[#6D6D6D] text-[14px] px-[10px]'>$40.00</h5>
                              </div>
                          </div>
                          <div className=' py-[20px] flex justify-end '>
                                <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Proceed to Checkout</button>
                            </div>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Cart