import React from 'react'
import Mark from "../img/mark.png";

const ProjectBox = ({number,title,descripition,img,link}) => {
    return (
        <div className={`flex flex-col md:flex-col p-4 lg:flex-row  hover:scale-110 transition-transform duration-200 gap-10 justify-between `}>
            <img data-aos="fade-down" src={img} className='object-contain rounded-md   sm:w-[594px] sm:h-[476px]' />
            <div className='mt-0 sm:mt-8  2xl:w-[820px] h-full sm:h-[350px]  md:h-[400px]'>
                <p className=' text-4xl py-4 font-extrabold'><b>{number}</b></p>
                <h2 className=' py-4 text-3xl font-bold'>{title}</h2>
                <p className=' text-sm sm:text-base py-2'>{descripition}</p>
                <a target="_blank" href={link}>
                <img src={Mark} className=' mt-4 w-[20px] h-[20px]' />
                </a>
            </div>
        </div>
    )
}

export default ProjectBox