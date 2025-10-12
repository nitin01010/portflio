import React from 'react'

const TestimonialBox = () => {
    return (
        <div className='  hover:scale-110 transition-transform duration-200 p-0 sm:p-[32px]  mt-5'>
            <div className='  w-[303px] h-[366px] sm:w-[370px] shadow-lg sm:h-[389px] p-[40px] py-[40px] hover:bg-black hover:text-white text-black rounded-[20px] m-auto'>
                <img src='' className=' w-[96px] border h-[96px] rounded-full bg-white m-auto' />
                <p className=' text-center mt-5'>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                <div className=' w-[120px] bg-black h-[2px] m-auto mt-8' />
                <p className=' text-center text-lg font-bold mt-3 '>Evren Shah</p>
                <p className=' text-base text-center py-2 mb-3 '>Designer</p>
            </div>
        </div>
    )
}

export default TestimonialBox