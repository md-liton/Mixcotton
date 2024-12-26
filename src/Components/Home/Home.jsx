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
  return (
    <>
      <Navbar />
      <Header />
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