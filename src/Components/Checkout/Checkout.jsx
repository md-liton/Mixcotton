import React from 'react'

const Checkout = () => {
  return (
    <section className='py-[50px]'>
      <div className="container">
        <div className="checkout_main">
        <div>
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Checkout</h5>
        <p><span className='text-[#6D6D6D] text-[14px] '>Have a coupon?</span> Click here to enter your code</p>
        <h5 className='font-dm font-bold text-[30px] text-primary py-[20px]'>Billing Details</h5>
        <div className='flex gap-[25px]'>
        <div className='md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Name</h5>
        <input type="text" placeholder='Input Your Name'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px]  focus:outline-none w-full'/>
        </div>
        <div className='md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Email</h5>
        <input type="text" placeholder='Input Your Email'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] w-full focus:outline-none'/>
        </div>
        </div>
        <div className='flex gap-[25px] md:my-[35px]'>
        <div className='md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Number</h5>
        <input type="text" placeholder='Input Your Number'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px]  focus:outline-none w-full'/>
        </div>
        <div className='md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Delivery Address</h5>
        <input type="text" placeholder='Input Your Delivery Address'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] w-full focus:outline-none'/>
        </div>
        </div>
        <div className='flex gap-[25px]'>
        <div className='md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>City</h5>
        <input type="text" placeholder=' City'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px]  focus:outline-none w-full'/>
        </div>
        <div className='md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Post Code</h5>
        <input type="text" placeholder='Post Code'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] w-full focus:outline-none'/>
        </div>
        </div>
        <div className='flex gap-[25px] md:my-[35px]'>
        <div className='md:w-1/2 '>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>District</h5>
        <input type="text" placeholder='District'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px]  focus:outline-none w-full'/>
        </div>
        <div className='md:w-1/2'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Division</h5>
        <input type="text" placeholder='Division'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] w-full focus:outline-none'/>
        </div>
        </div>
        <div className='py-[20px]'>
        <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Proceed to Order</button>
        </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Checkout