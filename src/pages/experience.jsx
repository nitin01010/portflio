import React from 'react'
import ExperienceBox from '../components/experienceBox'

const Experience = () => {
    return (
        <div className=' overflow-hidden p-[16px]  sm:p-[80px] bg-black  text-white'>
            <p className=' text-3xl text-center '>My <b className=' font-bold'>Experience</b></p>
            <div className=' flex flex-col gap-10 h-full sm:h-[720px]  mt-4 p-0  sm:p-[24px]'>
              <ExperienceBox position="Front-end Developer (Contract)" componie={'www.Minecart.in'} about={`
                    Developed responsive web pages using React.js, HTML, CSS, and JavaScript.
Integrated APIs and collaborated with backend developers for smooth functionality.
Fixed UI issues and optimized website performance for better user experience.
Maintained clean, reusable code and followed best frontend development practices.
                    `}
                    date={'23/07/2024 – 23/09/2024'}
                    />
                <ExperienceBox position="Mern stack intern" componie={'www.iQuanta.in'} about={`
                    Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
Designed and integrated RESTful APIs to connect frontend and backend efficiently.
Implemented authentication and authorization using JWT and middleware in Node.js.
Created responsive UI with React and Tailwind CSS for seamless user experience.
Managed CRUD operations and optimized MongoDB queries for performance.
Deployed applications and maintained them using Git and version control best practices.
                    `}
                    date={'5/10/2023 – 31/03/2024'}
                    />
            </div>
        </div>
    )
}

export default Experience