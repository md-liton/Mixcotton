import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';





const Header = () => {
  return (
    <header className='bg-[#F5F5F3] md:py-[25px] py-[14px]'>
        <div className="container">
            <div className="header_main flex justify-between items-center">
                <Link to='/products' className='md:w-[20%] flex items-center gap-[10px] md:text-[18px] font-dm text-primary cursor-pointer '>
                <HiOutlineMenuAlt2  className='text-[25px]'/>
                <p className='hidden md:block'>Shop by Category</p>
                </Link>
                <div className='w-[90%] md:w-[60%] md:flex md:justify-center md:items-center gap-[20px] md:gap-0 relative'>
                    <input type="search" placeholder='Search Product' className='p-[10px] rounded-lg w-full  md:w-[80%] focus:outline-none' />
                    <FaSearch className='absolute top-[15px] right-[8px] md:right-[12%] cursor-pointer'/>
                </div>
                <div className='md:w-[20%] flex justify-end items-center gap-[30px] hidden md:block'>                    
                <Link to='/login'>
                <div className='flex justify-center items-center gap-[5px] cursor-pointer'>
                <IoMdContact  className='text-[30px]'/>
                <p className='text-[14px]'> Sign In</p>
                </div>
                </Link>
                <div className=' cursor-pointer relative'>
                <Link to='/cart'>
                <FaCartShopping   className='text-[25px] '/>
                <div className='bg-secondary rounded-full flex justify-center items-center text-white absolute top-[-10px] right-[-10px] w-[20px] h-[20px]'>0</div>
                </Link>
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header