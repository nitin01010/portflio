import React from 'react'
import TestimonialBox from '../components/testimonialBox'

const Testimonial = () => {
    return (
        <div className=' p-[16px] sm:p-[80px] bg-white '>
            <p className=' text-3xl text-center text-black py-4 sm:py-0 mt-4 sm:mt-0  font-semibold'>My <b className=' font-extrabold'>Testimonial</b></p>
            <div className=' grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </div>
        </div>
    )
}

export default Testimonial