import React from 'react';
import NavBar from '../components/navigations/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='bg-[#1E2433]'>
        <NavBar></NavBar>
      <div className="flex-grow mb-10">
        <Outlet/>
      </div>
        <Footer></Footer>    
        </div>
    );
};

export default HomeLayout;