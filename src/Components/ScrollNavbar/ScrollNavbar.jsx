import React, { useEffect } from 'react'
import logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown, IoMdContact } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const ScrollNavbar = () => {
     const location = useLocation()
    
        useEffect(()=>{
            let shop = document.querySelector('.shop')
            let shopItem = document.querySelector('.shop_item')
            
        
        
        
            shop.addEventListener("mouseenter", () => {
              shopItem.classList.remove('hidden')
            });
            shop.addEventListener("mouseleave", () => {
              shopItem.classList.add('hidden')
            });
            
          },[])
  return (
    <nav className='py-[15px] bg-[#F5F5F3]'>
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
                      <div className=' cursor-pointer relative'>
                              <Link to='/cart'>
                                  <FaCartShopping className='text-[25px] ' />
                                  <div className='bg-secondary rounded-full flex justify-center items-center text-white absolute top-[-10px] right-[-10px] w-[20px] h-[20px]'>0</div>
                              </Link>
                          </div>
                  </div>
                    <div className="scroll_menu md:w-[30%]">
                        <ul className='md:text-[18px] font-dm md:flex md:justify-center md:items-center gap-[30px]'>
                            <li >
                                <Link to='/' className={` ${location.pathname == '/' ? 'text-primary' : 'text-secondary'}  hover:text-primary font-bold duration-300 cursor-pointer `}>Home</Link>
                            </li>
                            <li >
                                  <Link to='/shop' className={`shop ${location.pathname == '/shop' ? 'text-primary' : 'text-secondary'}  hover:text-primary font-bold duration-300 cursor-pointer relative  `}>
                                      <div className='flex items-center'>Shop <IoIosArrowDown /></div>
                                      <div className='shop_item absolute text-white text-[14px]  bg-[#F5F5F3] top-[20px] w-[500px] left-[-220px]   rounded-lg hidden duration-400 z-[99] flex justify-between text-center py-[20px]'>
                                        <div className='md:w-1/3'>
                                          <ul className=' p-[20px] '>
                                              <li className='py-[5px] text-[18px] text-primary font-bold duration-300'><Link to='/makeup/face'>Men</Link></li>
                                              <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                              <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                              <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          </ul>
                                        </div>
                                        <div className='md:w-1/3 border-x-2 border-secondary '>
                                          <ul className=' p-[20px] '>
                                          <li className='py-[5px] text-[18px] text-primary font-bold duration-300'><Link to='/makeup/face'>women</Link></li>
                                          <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          </ul>
                                        </div>
                                        <div className='md:w-1/3'>
                                          <ul className=' p-[20px] '>
                                          <li className='py-[5px] text-[18px] text-primary font-bold duration-300'><Link to='/makeup/face'>Baby</Link></li>
                                          <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          <li className='py-[5px] text-primary duration-300 hover:text-secondary'><Link to='/makeup/lips'>Lips</Link></li>
                                          </ul>
                                        </div>
                                      </div>
                                  </Link>
                            </li>
                            <li >
                                <Link to='/about' className={` ${location.pathname == '/about' ? 'text-primary' : 'text-secondary'}  hover:text-primary font-bold duration-300 cursor-pointer `}>About</Link>
                            </li>
                            <li >
                                <Link to='/contacts' className={` ${location.pathname == '/contacts' ? 'text-primary' : 'text-secondary'}  hover:text-primary font-bold duration-300 cursor-pointer `}>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default ScrollNavbar