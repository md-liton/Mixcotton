import React from 'react'
import logo from '../../assets/Logo.png'
import { FaFacebook,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";




const Footer = () => {
  return (
    <section className='py-[30px] font-dm bg-[#F5F5F3]'>
        <div className="container">
            <div className="footer_main">
                <div className='md:flex md:gap-[60px]'>
                    <div className='md:w-1/2 flex justify-between items-center'>
                    <div>
                        <h5 className='font-bold text-[16px] text-primary'>MENU</h5>
                        <ul className='text-[#6D6D6D] text-[14px] '>
                            <li className='cursor-pointer py-[5px]'>Home</li>
                            <li className='cursor-pointer py-[5px]'>About</li>
                            <li className='cursor-pointer py-[5px]'>Shop</li>
                            <li className='cursor-pointer py-[5px]'>Journal</li>
                            <li className='cursor-pointer py-[5px]'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-bold text-[16px] text-primary'>SHOP</h5>
                        <ul className='text-[#6D6D6D] text-[14px] '>
                            <li className='cursor-pointer py-[5px]'>Category 1</li>
                            <li className='cursor-pointer py-[5px]'>Category 2</li>
                            <li className='cursor-pointer py-[5px]'>Category 3</li>
                            <li className='cursor-pointer py-[5px]'>Category 4</li>
                            <li className='cursor-pointer py-[5px]'>Category 5</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-bold text-[16px] text-primary'>HELP</h5>
                        <ul className='text-[#6D6D6D] text-[14px] '>
                            <li className='cursor-pointer py-[5px]'>Privacy Policy</li>
                            <li className='cursor-pointer py-[5px]'>Terms & Conditions</li>
                            <li className='cursor-pointer py-[5px]'>Special E-shop</li>
                            <li className='cursor-pointer py-[5px]'>Shipping</li>
                            <li className='cursor-pointer py-[5px]'>Secure Payments</li>
                        </ul>
                    </div>
                    </div>
                    <div className='md:w-1/2 flex justify-between'>
                    <div>
                        <h5 className='font-bold text-[16px] text-primary'>(052) 611-5711</h5>
                        <h5 className='font-bold text-[16px] text-primary'>company@domain.com</h5>
                        <p className=' py-[5px] text-[#6D6D6D] text-[14px]'>575 Crescent Ave. Quakertown, PA 18951</p>
                    </div>
                    <div>
                        <img src={logo} alt="logo" className='cursor-pointer' />
                    </div>
                    </div>
                </div>
                <div className='flex justify-between pt-[40px]'>
                    <div className='w-1/2'>
                          <div className='flex items-center gap-[20px] text-[20px]'>
                              <FaFacebook className='cursor-pointer'/>
                              <FaLinkedin className='cursor-pointer'/>
                              <FaInstagramSquare className='cursor-pointer' />
                              <AiFillTikTok  className='cursor-pointer'/>
                          </div>
                    </div>
                    <div className='w-1/2'>
                    <p className=' py-[5px] text-[#6D6D6D] text-[14px] text-end' >2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer