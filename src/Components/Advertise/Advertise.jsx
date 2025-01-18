import React, { useEffect } from 'react'
import ad1 from '../../assets/Ad1.jpg'
import ad2 from '../../assets/Ad2.png'
import ad3 from '../../assets/Ad3.png'

const Advertise = () => {
  
  return (
    <section className='md:py-[80px] py-[30px]'>
        <div className="container">
            <div className="ad_main md:flex justify-between gap-[30px]">
                <div className='md:w-1/2'>
                <img src={ad1} alt="img" className='w-full'/>
                </div>
                <div className='md:w-1/2 mt-[25px] md:mt-0'>
                <div>
                    <img src={ad2} alt="img"  className='w-full'/>
                </div>
                <div className='mt-[30px]'>
                    <img src={ad3} alt="img"  className='w-full'/>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advertise