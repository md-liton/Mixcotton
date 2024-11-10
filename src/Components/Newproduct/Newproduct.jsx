import React, { useEffect } from 'react'
import newimg from '../../assets/new.png'

const Newproduct = () => {
    // useEffect(()=>{
    //     const newProduct = document.querySelector()
    // },{})
  return (
    <section className='py-[30px]'>
        <div className="container">
            <div className="new_main">
                  <div className='relative new_product cursor-pointer'>
                      <div className='w-[370px] h-[370px] rounded-lg overflow-hidden '>
                        <img src={newimg} alt="img" className='w-full h-full'/>
                      </div>
                      <div className='new_btn absolute bottom-0 left-0 w-[370px] bg-white  text-white font-normal font-dm'>
                        <div className=' py-[30px] '>
                            <button className='py-[10px] px-[30px] rounded-lg bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300'>Add to Cart</button>
                            <button>View Details</button>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Newproduct