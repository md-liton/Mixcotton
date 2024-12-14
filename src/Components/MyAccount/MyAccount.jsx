import React from 'react'

const MyAccount = () => {
  return (
      <section className='py-[40px] font-dm'>
          <div className="container">
              <div className="myaccout_main ">
                  <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>My Account</h5>
                  <div className='flex gap-[25px]'>
                      <div className='w-1/4'>
                      <ul>
                        <li className='font-normal text-[#6D6D6D] text-[14px] border-b-2 border-[#E3E3E3] py-[20px] cursor-pointer hover:font-bold hover:text-primary ease-in-out duration-300 md:w-[70%]'>Dashboard</li>
                        <li className='font-normal text-[#6D6D6D] text-[14px] border-b-2 border-[#E3E3E3] py-[20px] cursor-pointer hover:font-bold hover:text-primary ease-in-out duration-300 md:w-[70%]'>Addresses</li>
                        <li className='font-normal text-[#6D6D6D] text-[14px] border-b-2 border-[#E3E3E3] py-[20px] cursor-pointer hover:font-bold hover:text-primary ease-in-out duration-300 md:w-[70%]'>Account details</li>
                        <li className='font-normal text-[#6D6D6D] text-[14px] border-b-2 border-[#E3E3E3] py-[20px] cursor-pointer hover:font-bold hover:text-primary ease-in-out duration-300 md:w-[70%]'>Logout</li>
                      </ul>
                      </div>
                      <div className='w-3/4'>
                          <div className='text-[#6D6D6D] text-[16px] text-normal'>
                          <p>From your account dashboard you can view your <span className='font-bold text-primary'>recent orders</span>, manage your <span className='font-bold text-primary'>shipping and billing addresses</span>, and <span className='font-bold text-primary'>edit your password and account details</span>.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default MyAccount