import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Policy from '../Policy/Policy'
import Advertise from '../Advertise/Advertise'
import Newproduct from '../Newproduct/Newproduct'
import Special from '../SpecialOffer/Special'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);


  useEffect(()=>{
    window.addEventListener("scroll",function(){
        var header = document.querySelector('.header')
        header.classList.toggle('sticky' , window.scrollY > 180)
    })

},[])
  return (
    <>
    <div className='header top-0 left-0 w-full z-[999] bg-white shadow-lg  shadow-slate-400 duration-300'>
      <Navbar />
      <Header />
    </div>
      {
        location.pathname == '/' &&
          <div>
            <Banner />
            <Policy />
            <Advertise />
            <Newproduct />
            <Special />
          </div>
      }
      <Outlet>
      </Outlet>
      <Footer />
    </>
  )
}

export default Home