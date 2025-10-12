import React from 'react'
import Google from "../img/google.png";

const ExperienceBox = ({position,about,date,componie}) => {
    return (
        <div data-aos="fade-down" className='  w-[343px]  hover:scale-110 transition-transform duration-200   h-[426px] sm:w-full m-auto sm:m-0 sm:h-[192px] border p-[24px]  mt-6 border-[#D4D4D8] hover:bg-[#404040]  ease-linear rounded-[10px]'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                <div className=' flex gap-4'>
                    <p className=' font-bold text-lg capitalize'>{componie}</p>
                    {/* <img src={Google} className='  w-[32px] h-[32px]' /> */}
                    <p className=' font-bold text-base sm:text-xl capitalize'>{position}</p>
                </div>
                <p>{date}</p>
            </div>
            <p className=' mt-5 text-base'>{about}</p>
        </div>
    )
}

export default ExperienceBox