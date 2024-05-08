import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-indigo-950 to-black text-white pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pt-4'>
          <p className='text-4xl font-bold inline border-b-4'>About</p>
        </div>
        <p className='text-lg font-light mt-20'>
        Hi,I am Meron I'm a skilled software developer with experience in Html,Css and JavaScript, and expertise in frameworks like React, Node.js, and Django. 
        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
        </p>
        <br />

        <p className='text-lg font-light'>
          I possess a relentless drive to stay at the forefront of the ever-evolving tech industry. My unwavering commitment to innovation
          fuels my work and pushes me to explore new horizons. I am continuously seeking creative solutions to complex problems,
          harnessing the power of technology to shape a better digital future. As a dedicated computer engineer, I am ready to tackle your
          project with enthusiasm, ensuring that every aspect is meticulously designed, developed, and delivered to the highest standards
        </p>
      </div>
    </div>
  )
}

export default About