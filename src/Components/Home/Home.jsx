import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Policy from '../Policy/Policy';
import Advertise from '../Advertise/Advertise';
import Newproduct from '../Newproduct/Newproduct';
import Special from '../SpecialOffer/Special';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollNavbar from '../ScrollNavbar/ScrollNavbar';

const Home = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 180); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className='overflow-hidden'>
       {/* Sticky Navbar */}
       <div className={`header ${ isSticky ? 'sticky' : 'hidden' }`}>
        <ScrollNavbar />
      </div>

      {/* Main Content */}
      <Navbar />
      <Header />
      {pathname === '/' && (
        <div>
          <Banner />
          <Policy />
          <Advertise />
          <Newproduct />
          <Special />
        </div>
      )}
      <Outlet />
      <Footer />
    </div>
     
    </>
  );
};

export default Home;
