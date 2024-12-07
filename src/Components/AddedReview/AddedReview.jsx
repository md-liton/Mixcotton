import React from 'react'

const AddedReview = () => {
  return (
    <section>
        <div className="add_review_main">
        <h5 className='font-dm font-semibold text-[22px] text-primary py-[40px]'>Add a Review </h5>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Name</h5>
        <input type="text" placeholder='Input Your Name'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-1/2 focus:outline-none'/>
        <div className='py-[20px]'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Email</h5>
        <input type="text" placeholder='Input Your Email'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-1/2 focus:outline-none'/>
        </div>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Review</h5>
        <textarea placeholder='Review Here'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3]  lg:w-1/2 focus:outline-none h-[200px]'></textarea>
        <div className='py-[20px]'>
        <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Post</button>
        </div>
        </div>
    </section>
  )
}

export default AddedReview