import React from 'react'

const Registration = () => {
  return (
    <section className='py-[50px]'>
      <div className="container">
        <div className="login_main">
        <div>
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Sign up</h5>
        <p className='md:w-[650px] text-[#6D6D6D] text-[16px] text-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>


        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Your Personal Details</h5>
        <div className='border-y-2 border-[#F0F0F0]'>
        <div className='flex gap-[20px]  py-[30px]'>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>First Name</h5>
        <input type="text" placeholder='First Name'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Last Name</h5>
        <input type="text" placeholder='Last Name'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        <div className='flex gap-[20px] py-[30px]'>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Email</h5>
        <input type="text" placeholder='Input Your Email'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Telephone</h5>
        <input type="text" placeholder='Telephone'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        </div>

        {/* New customer part start */}
        <div >
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>New Customer</h5>
        <div className=''>
        <div className='flex gap-[20px]  py-[20px]'>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Address 1</h5>
        <input type="text" placeholder='Address'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Address 2</h5>
        <input type="text" placeholder='-'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        <div className='flex gap-[20px] py-[20px]'>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>City</h5>
        <input type="text" placeholder='City'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Post Code</h5>
        <input type="text" placeholder='Post Code'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        <div className='flex gap-[20px] py-[20px]'>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>District</h5>
        <input type="text" placeholder='District'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Division</h5>
        <input type="text" placeholder='Division'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        </div>
        </div>
        {/* New customer part end */}

        {/* Password  part start */}
        <div >
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Your Password</h5>
        <div className=''>
        <div className='flex gap-[20px]  py-[20px]'>
        <div className='py-[20px] md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Password</h5>
        <input type="password" placeholder='Password'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        <div className='py-[20px] md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Repeat Password</h5>
        <input type="password" placeholder='Repeat password'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-3/4 focus:outline-none'/>
        </div>
        </div>
        </div>
        <div className='py-[20px]'>
        <button className='py-[10px] px-[50px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Sign up</button>
        </div>
        </div>
        {/* Password part end */}


        </div>

        </div>
      </div>
    </section>
  )
}

export default Registration