import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";



const Policy = () => {
  return (
    <section className='py-[15px] border-b-[1px] border-[#F0F0F0]'>
        <div className="container">
            <div className="policy_main flex justify-between items-center font-dm text-[#6D6D6D]">
                <div className='w-1/3 flex items-center gap-[8px]'>
                <span className='text-[18px] font-bold text-primary'>2</span>
                <span className='text-[16px] font-normal'>Two years warranty</span>
                </div>
                <div className='w-1/3 flex items-center justify-center gap-[8px]'>
                <span className='text-[18px] font-bold text-primary'><TbTruckDelivery /></span>
                <span className='text-[16px] font-normal'>Free shipping</span>
                </div>
                <div className='w-1/3 flex items-center justify-end gap-[8px]'>
                <span className='text-[18px] font-bold text-primary'><TfiReload /></span>
                <span className='text-[16px] font-normal'>Return policy in 30 days</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Policy