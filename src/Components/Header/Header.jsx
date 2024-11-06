import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";





const Header = () => {
  return (
    <header className='bg-[#F5F5F3] py-[25px]'>
        <div className="container">
            <div className="header_main md:flex md:justify-between md:items-center">
                <div className='md:w-[20%] flex items-center gap-[10px] md:text-[18px] font-dm text-primary cursor-pointer '>
                <HiOutlineMenuAlt2 />
                <p>Shop by Category</p>
                </div>
                <div className='md:w-[60%] md:flex md:justify-center md:items-center relative'>
                    <input type="search" placeholder='Search Product' className='p-[10px] rounded-lg md:w-[80%] focus:outline-none' />
                    <FaSearch className='absolute top-[15px] right-[12%] cursor-pointer'/>
                </div>
                <div className='md:w-[20%] flex justify-end items-center gap-[30px]'>                    
                <div className='flex justify-center items-center gap-[5px] cursor-pointer'>
                <IoMdContact  className='text-[30px]'/>
                <p className='text-[14px]'> Sign In</p>
                </div>
                <div className=' cursor-pointer relative'>
                <FaCartShopping   className='text-[25px] '/>
                <div className='bg-secondary rounded-full flex justify-center items-center text-white absolute top-[-10px] right-[-10px] w-[20px] h-[20px]'>0</div>
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header