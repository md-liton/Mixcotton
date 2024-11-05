import React from 'react'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='py-[15px]'>
        <div className="container">
            <div className="nav_main md:flex md:justify-center md:items-center">
                <div className="logo md:w-[20%]">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu md:w-[80%]">
                    <ul className='md:text-[18px] font-dm md:flex md:justify-center md:items-center gap-[30px]'>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>Home</li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>Shop</li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>About</li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>Contacts</li>
                        <li className=' text-secondary hover:text-primary font-bold duration-300 cursor-pointer'>Journal</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar