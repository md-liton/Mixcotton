import React from 'react'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='py-[25px]'>
        <div className="container">
            <div className="nav_main md:flex md:justify-center md:items-center">
                <div className="logo md:w-[20%]">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu md:w-[80%]">
                    <ul className='md:text-[18px] font-dm md:flex md:justify-center md:items-center gap-[30px]'>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>
                            <Link to='journal'>Journal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar