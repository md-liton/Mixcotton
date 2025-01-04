import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation()
  return (
      <div>
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
  )
}

export default Menu