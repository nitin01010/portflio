import React from 'react'
import Group from '../img/Group.png';

const About = () => {
  return (
    <div className=' p-[16px] sm:p-[80px]  bg-white' id='about'>
      <div className='flex   flex-col justify-between gap-10 2xl:gap-40  lg:flex-row p-0 sm:p-[32px]  '>
        <img src={Group} data-aos="fade-down" className='object-contain m-auto' />
        <div  className='  w-full lg:w-[750px]  text-[#71717A]  flex flex-col gap-4'>
          <p className=' text-5xl text-black'>About<b className=' font-bold '> Me</b></p>
          <p className='mt-8'>
            Hi, I’m <strong>Nitin Sachdeva</strong>, a dedicated frontend developer with eight months of hands-on experience in creating responsive and user-friendly web interfaces. I’m passionate about building modern web solutions that seamlessly blend creativity with functionality, ensuring both technical precision and aesthetic appeal.
          </p>

          <p>
            Currently pursuing my <strong>Bachelor of Computer Applications</strong> from <strong>ISBM University</strong>, I’ve also completed a professional training program from <strong>Internshala</strong>, where I explored the <strong>MERN stack</strong> and gained practical knowledge in both frontend and backend development. I continuously strive to enhance my skills, stay updated with the latest technologies, and deliver efficient, maintainable code.
          </p>

          <p>
            When I’m not coding, you’ll find me exploring new tech trends, engaging with the developer community, or learning something new to sharpen my craft. Always eager to grow and take on new challenges, I’m ready to contribute my skills and enthusiasm as an immediate joiner to a dynamic development team.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About