import React from 'react'
import brand from '../../assets/ourbrand.png'
import stor from '../../assets/ourstore.png'

const About = () => {
  return (
    <section className='py-[30px] font-dm '>
      <div className="container">
        <div className="about_main">
          <h2 className='font-bold text-[40px] text-primary py-[20px]'>About</h2>
          <div className='flex justify-center gap-[45px]'>
            <img src={brand} alt="" className='w-[400px]'/>
            <img src={stor} alt="" className='w-[400px]'/>
          </div>
          <h2 className='font-dm font-normal text-[40px] text-primary py-[20px] text-center'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
          <div className='flex justify-between gap-[40px] py-[20px]'>
            <div>
              <h4  className='font-bold text-[20px] text-primary py-[20px]'>Our Vision</h4>
              <p className='text-[#6D6D6D] text-[14px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
              <h4  className='font-bold text-[20px] text-primary py-[20px]'>Our Story</h4>
              <p className='text-[#6D6D6D] text-[14px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
              <h4  className='font-bold text-[20px] text-primary py-[20px]'>Our Brands</h4>
              <p className='text-[#6D6D6D] text-[14px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About