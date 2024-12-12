import React from 'react'

const Contacts = () => {
  return (
    <section className='py-[50px]'>
      <div className="container">
        <div className="contact_main">
          {/* contact top part start */}
        <div>
        <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Contacts</h5>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Name</h5>
        <input type="text" placeholder='Input Your Name'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-1/2 focus:outline-none'/>
        <div className='py-[20px]'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Email</h5>
        <input type="text" placeholder='Input Your Email'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-1/2 focus:outline-none'/>
        </div>
        <div className='py-[20px]'>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Number</h5>
        <input type="text" placeholder='Input Your Number'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3] py-[10px] lg:w-1/2 focus:outline-none'/>
        </div>
        <h5 className='font-dm font-semibold text-[18px] text-primary'>Message</h5>
        <textarea placeholder='Message Here'  className='text-[15px] font-normal text-secondary border-b-2 border-[#E3E3E3]  lg:w-1/2 focus:outline-none h-[150px]'></textarea>
        <div className='py-[20px]'>
        <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Send</button>
        </div>
        </div>
         {/* contact top part end */}

          {/* contact bottom part start */}
          <div className='py-[25px]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.891503112!2d87.70352446720406!3d23.489442187647825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1734008106843!5m2!1sen!2sbd" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* contact bottom part end */}

        </div>
      </div>
    </section>
  )
}

export default Contacts