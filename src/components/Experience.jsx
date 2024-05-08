import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from 'react';
const Experience = () => {
     const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.4) {
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
    const experiences = [
        {
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: 'html',
            style: 'shadow-orange-500'
        }, 
        {
            id: 2,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            alt: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            alt: 'tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            alt: 'bootstrap',
            style: 'shadow-violet-600'
        },
        {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            alt: 'typescript',
            style: 'shadow-sky-800'
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: 'react',
            style: 'shadow-sky-400'
        },
        // {
        //     id: 24,
        //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        //     alt: 'Vue',
        //     style: 'shadow-green-300'
        // },
        // {
        //     id: 8,
        //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        //     alt: 'redux',
        //     style: 'shadow-violet-600'
        // },
        // {
        //     id: 9,
        //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" ,
        //     alt: 'next',
        //     style: 'shadow-white'
        // },
        {
            id: 10,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: 'node',
            style: 'shadow-lime-500',
        },
        {
            id: 11,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: 'express',
            style: 'shadow-white',
        },
        {
            id: 12,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            alt: 'mysql',
            style: 'shadow-blue-500'
        },
        {
            id: 13,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            alt: 'mongo',
            style: 'shadow-lime-500'
        },
        {
            id: 14,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            alt: 'git',
            style: 'shadow-red-600'
        },
        {
            id: 15,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            alt: 'github',
            style: 'shadow-gray-500'
        },
       
        // {
        //     id: 16,
        //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        //     alt: 'graphql',
        //     style: 'shadow-pink-500'
        // },
        {
            id: 19,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            alt: 'python',
            style: 'shadow-yellow-500'
        },
        {
            id: 20,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            alt: 'php',
            style: 'shadow-indigo-300'
        },
        {
            id: 21,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            alt: 'django',
            style: 'shadow-green-700'
        },
        // {
        //     id: 22,
        //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        //     alt: 'materialUi',
        //     style: 'shadow-blue-500'
        // },
        {
            id: 23,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
            alt: 'wordPress',
            style: 'shadow-gray-500'
        },
        {
            id: 24,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-plain.svg",
            alt: 'jira',
            style: 'shadow-slate-700'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-indigo-950 to-black w-full pt-20' >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    experiences.map((expr,index) => {
                        return(
                            <motion.div
                            initial={{ y: 100, opacity: 0 }}
                animate={controls}
                transition={{
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                  delay: index * 0.1,}}
                  whileHover={{
                   scale: 1.05,
                   transition: { duration: 0.2 } }}
                  viewport={{ once: true, amount: 0.8 }}
                  whileTap={{ scale: 0.9 }}           
                                key={expr.id} className={`shadow-md hover:scale-105  py-2 rounded-lg ${expr.style}`}>
                                <img src={expr.src} alt={expr.alt} width={200} height={250} className={`w-20 mx-auto ${expr.alt === 'github' ? "bg-white rounded-full" : ''} ${expr.imgStyle}`} />
                                <p className='mt-4 capitalize'>{expr.alt}</p>
                            </motion.div>
                        )
                    })
                }
               
            </div>

        </div>
          
    </div>
  )
}

export default Experience