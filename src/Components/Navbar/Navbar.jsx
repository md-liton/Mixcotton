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
            <div>
            <IoMdMenu className={`text-[25px] ${menu ? 'hidden' : 'block'}`} onClick={()=>setMenu(!menu)}/>
            <IoMdClose className={`text-[25px] ${!menu ? 'hidden' : 'block'}`} onClick={()=>setMenu(!menu)}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar