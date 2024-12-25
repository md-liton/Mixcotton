import React from 'react'
import logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
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
                            <Link to='/shop' className={` ${location.pathname == '/shop' ? 'text-primary' : 'text-secondary'}  hover:text-primary font-bold duration-300 cursor-pointer `}>Shop</Link>
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