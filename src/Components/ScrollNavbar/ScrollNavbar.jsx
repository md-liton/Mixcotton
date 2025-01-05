import React, { useEffect } from 'react'
import logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown, IoMdContact } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import Menu from '../Menu/Menu'

const ScrollNavbar = () => {
  const location = useLocation()

  useEffect(() => {
    let shop = document.querySelector('.shop')
    let shopItem = document.querySelector('.shop_item')


    shop.addEventListener("mouseenter", () => {
      shopItem.classList.remove('hidden')
    });
    shop.addEventListener("mouseleave", () => {
      shopItem.classList.add('hidden')
    });

  }, [])
  return (
    <nav className='py-[25px] bg-[#F5F5F3]'>
      <div className="container">
        <div className="scroll_nav_main md:flex md:justify-center md:items-center">
          <div className="logo md:w-[20%]">
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="logo md:w-[50%] flex  items-center">
            <div className=' w-[80%] md:flex md:justify-center md:items-center relative'>
              <input type="search" placeholder='Search Product' className='p-[10px] rounded-lg md:w-[80%] focus:outline-none' />
              <FaSearch className='absolute top-[15px] right-[12%] cursor-pointer' />
            </div>
            <div className='md:w-[20%] flex items-center gap-[10px]'>
              <Link to='/login'>
                <div className='flex justify-center items-center gap-[5px] cursor-pointer'>
                  <IoMdContact className='text-[30px]' />
                  <p className='text-[14px]'> Sign In</p>
                </div>
              </Link>
              <div className=' cursor-pointer relative'>
                <Link to='/cart'>
                  <FaCartShopping className='text-[25px] ' />
                  <div className='bg-secondary rounded-full flex justify-center items-center text-white absolute top-[-10px] right-[-10px] w-[20px] h-[20px]'>0</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="scroll_menu md:w-[30%]">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ScrollNavbar