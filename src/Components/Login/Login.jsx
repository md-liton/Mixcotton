import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='py-[50px]'>
      <div className="container">
        <div className="login_main">
        <div>
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Login</h5>
        <p className='md:w-[650px] text-[#6D6D6D] text-[16px] text-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Returning Customer</h5>
        <div className='flex gap-[20px] border-y-2 border-[#F0F0F0] py-[50px]'>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Email</h5>
        <input type="text" placeholder='Input Your Email'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Password</h5>
        <input type="password" placeholder='Password'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        <div className='py-[20px]'>
        <button className='py-[10px] px-[50px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Log in</button>
        </div>

        {/* New customer part start */}
        <div className='py-[50px]'>
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>New Customer</h5>
        <p className='md:w-[650px] text-[#6D6D6D] text-[16px] text-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <div className='py-[20px]'>
        <Link to='/registration'>
        <button className='py-[10px] px-[50px] bg-transparent  bg-primary hover:bg-primary hover:border hove:border-[1px] hover:border-primary  easy-in duration-300 border border-[1px] border-primary text-primary hover:text-white' >Sign Up</button>
        </Link>
        </div>
        </div>
        {/* New customer part end */}


        </div>

        </div>
      </div>
    </section>
  )
}

export default Login