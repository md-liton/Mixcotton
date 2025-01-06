import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown,IoMdMenu,IoMdClose } from 'react-icons/io'
import Menu from '../Menu/Menu'

const Navbar = () => {
  const location = useLocation()

  const [menu,setMenu]=useState(false)

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
    <nav className='py-[25px]'>
      <div className="container">
        <div className="nav_main flex justify-between md:justify-center items-center">
          <div className="logo md:w-[20%]">
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu md:w-[80%]">
            <div className='hidden md:block'>
              <Menu />
            </div>
            <div className='md:hidden'>
              <IoMdMenu className={`text-[25px] ${menu ? 'hidden' : 'block'}`} onClick={() => setMenu(!menu)} />
              <IoMdClose className={`text-[25px] ${!menu ? 'hidden' : 'block'}`} onClick={() => setMenu(!menu)} />
            </div>
          </div>
        </div>
      </div>
      <div className={`h-[500px] w-3/4 bg-red-500 absolute top-0 left-0 z-[999] ease-in duration-300 ${!menu ? 'opacity-0 invisible w-[0px]' : 'opacity-100 visible'}`}>
        <p>mdliton</p>
      </div>
    </nav>
  )
}

export default Navbar