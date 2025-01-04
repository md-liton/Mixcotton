import React, { useEffect } from 'react'
import logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import Menu from '../Menu/Menu'

const Navbar = () => {
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
    <nav className='py-[25px]'>
      <div className="container">
        <div className="nav_main md:flex md:justify-center md:items-center">
          <div className="logo md:w-[20%]">
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu md:w-[80%]">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar