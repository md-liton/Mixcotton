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
    <nav className='md:py-[25px] py-[18px] '>
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
      <div className={`h-[500px] w-3/4 bg-[#F5F5F3] absolute top-0 left-0 z-[999] ease-in duration-300 px-[10px] py-[25px] ${!menu ? 'opacity-0 invisible w-[0px]' : 'opacity-100 visible'}`}>
        <ul className="md:text-[18px] font-dm md:flex md:justify-center md:items-center gap-[30px]">
                <li>
                  <Link to="/" className={` ${location.pathname === '/' ? 'text-primary' : 'text-secondary'} hover:text-primary font-bold duration-300 cursor-pointer`}>
                    Home
                  </Link>
                </li>
                <li className="" >
                  <Link  to="" className={`shop ${  location.pathname === '/shop' ? 'text-primary' : 'text-secondary' } hover:text-primary font-bold duration-300 cursor-pointer`} >
                    <div className="flex items-center">
                      Shop <IoIosArrowDown />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={` ${ location.pathname === '/about' ? 'text-primary' : 'text-secondary' } hover:text-primary font-bold duration-300 cursor-pointer`} >
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className={` ${ location.pathname === '/contacts' ? 'text-primary' : 'text-secondary' } hover:text-primary font-bold duration-300 cursor-pointer`} >
                    Contacts
                  </Link>
                </li>
              </ul>
      </div>
    </nav>
  )
}

export default Navbar