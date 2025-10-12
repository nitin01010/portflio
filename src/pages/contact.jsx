import React from 'react'
import ShareButton from '../components/shareButton'

const Contact = () => {
    return (
        <div id='contact' className=' p-[16px] sm:p-[80px] bg-white '>
            <div  className=' flex flex-col lg:flex-row p-0   sm:p-[32px] '>
                <form data-aos="fade-down" action="mailto:nitinsachdeva0202@gmail.com" method="post" enctype="text/plain" className=' flex gap-8 flex-col  w-full md:w-[50%] py-5  '>
                    <input type="text" name="name" className='  w-full md:w-[500px] text-black  h-[56px] border border-black outline-none rounded-[4px] p-[24px]' placeholder='Your name' required />
                    <input type="email" name="email" className='  w-full md:w-[500px] text-black  h-[56px] border border-black outline-none rounded-[4px] p-[24px]' placeholder='Email' required />
                    <input type="text" name="website"  className='  w-full md:w-[500px] text-black  h-[56px] border border-black outline-none rounded-[4px] p-[24px]' required placeholder='Your website (If exists)' />
                    <textarea name="message" required className=' w-full   md:w-[500px] text-black  h-[140px] border border-black outline-none rounded-[4px] p-[24px]' placeholder='How can I help?*' />
                    <div className=' flex flex-col gap-11'>
                        <button type="submit" className=' w-[173px] h-[56px] bg-black rounded-[4px] text-base font-bold p-[20px]'>Get In Touch</button>
                        <ShareButton />
                    </div>
                </form>
                <div data-aos="fade-down" className=' w-full  md:w-[50%] text-black py-10 sm:py-0 '>
                    <p className=' text-3xl md:text-6xl py-2 sm:py-4'><b className='font-extrabold'>Let's talk</b> <b className=' font-extrabold'>for</b></p>
                    <p className=' text-3xl md:text-5xl py-2 sm:py-4'><b className=' font-extrabold'>Something special</b></p>
                    <p className=' text-base py-4'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

                    <p className=' text-base  sm:text-2xl font-extrabold py-3'><b>Nitinsachdeva0202@gmail.com</b></p>
                    <p className=' text-base sm:text-2xl font-extrabold py-2'>+91 (9311330265)</p>
                </div>
            </div>
        </div>
    )
}

export default Contact