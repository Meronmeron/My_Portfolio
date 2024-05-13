import React from 'react';
// import second from 'first'
import Inventory from '../assets/portfolio/Inventory.jpg';
import logo192 from '../assets/portfolio/logo192.png';
import TweeterClone from '../assets/portfolio/TweeterClone.png';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.2) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [inView, controls]);

  const portfolios = [
    {
      id: 1,
      src: Inventory,
      title: 'QR Code Based Inventory Management System',
      demo: 'https://mikiasmiessa.000webhostapp.com/inventory/Products.php',
      code: 'https://github.com/Meronmeron/QRcode-based-inventory-management-system-main',
    },
    {
      id: 2,
      src: TweeterClone,
      title: 'Social Media',
      demo: '#',
      code: 'https://github.com/Meronmeron/Twitter-Django',
    },
    {
      id: 3,
      src: logo192,
      title: 'Dice Game',
      demo: '#',
      code: 'https://github.com/Meronmeron/Dicegame-react',
    },
  ];
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black via-black to-indigo-950 w-full text-white pt-20'
    >
      {/* md:h-screen */}
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map((port, index) => {
            return (
              <motion.div
                key={port.id}
                className='shadow-md shadow-gray-600 rounded-lg'
                initial={{ y: 100, opacity: 0 }}
                animate={controls}
                transition={{
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <img
                  src={port.src}
                  alt={port.src}
                  className='rounded-md duration-200 hover:scale-150'
                />
                <div className='flex justify-center items-center pt-5 font-semibold px-10'>
                  {port.title}
                </div>
                <div className='flex items-center justify-center'>
                  <a
                    href={port.demo}
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <motion.button
                      className='text-indigo-500'
                      whileHover={{
                        textShadow: '8px,8px,20px,rgb(255,255,255)',
                      }}
                    >
                      Demo
                    </motion.button>
                  </a>
                  <a
                    href={port.code}
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <motion.button
                      className='text-indigo-500'
                      whileHover={{
                        textShadow: '8px,8px,8px,rgb(255,255,255)',
                      }}
                    >
                      Code
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
