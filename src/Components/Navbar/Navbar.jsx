import React, { useEffect } from 'react'
import logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
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
    <nav className='py-[25px]'>
        <div className="container">
            <div className="nav_main md:flex md:justify-center md:items-center">
                <div className="logo md:w-[20%]">
                    <Link>
                    <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu md:w-[80%]">
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

export default Navbar