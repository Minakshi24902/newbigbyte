import React from 'react';
import { motion } from 'framer-motion';
import eduBg from '../../assets/edu.jpg'; // ✅ Import the sectors image

const Hero3 = () => {
  return (
    <div
      className='min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url(${eduBg})`}}
      id='header'      
    >    
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
      >
        <h3 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
        Unlock Your Potential Through Learning    
        </h3>
      </motion.div>             
    </div>     
  );
};

export default Hero3;              



       