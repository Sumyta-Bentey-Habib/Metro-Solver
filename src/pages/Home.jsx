import React, { useEffect } from 'react';
import SuccessSection from '../components/SuccessSection';

const Home = () => {
   useEffect(() => {
          document.title = "Metro Solver ";
        }, []);
  return (
    <div className='bg-[#1E2433]'>
        <SuccessSection></SuccessSection>    
    </div>
  );
};

export default Home;