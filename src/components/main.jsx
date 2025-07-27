// import { Dot, Github, Globe, Mail, SquareArrowOutUpRight } from 'lucide-react'
// const tech = [
//     {
//         id: 1,
//         url: 'https://www.stefantopalovic.com/html-icon.svg',
//         name: 'HTML'
//     },
//     {
//         id: 2,
//         url: 'https://www.stefantopalovic.com/css-icon.svg',
//         name: 'CSS'
//     },
//     {
//         id: 3,
//         url: 'https://www.stefantopalovic.com/javascript-icon.svg',
//         name: 'JAVASCRIPT'
//     },
//     {
//         id: 4,
//         url: 'https://www.stefantopalovic.com/react-icon.svg',
//         name: 'REACT'
//     },
//     {
//         id: 5,
//         url: 'https://www.stefantopalovic.com/tailwind-icon.svg',
//         name: 'TAILWINDCSS'
//     },
//     {
//         id: 6,
//         url: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000',
//         name: 'NODE.JS'
//     },
//     {
//         id: 7,
//         url: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp',
//         name: 'EXPRESS.JS'
//     },
//     {
//         id: 8,
//         url: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000',
//         name: 'MONGODB'
//     },
//     {
//         id: 9,
//         url: 'https://img.icons8.com/?size=100&id=b6vIINYN0kfW&format=png&color=000000',
//         name: 'REDUX'
//     },
//     {
//         id: 10,
//         url: 'https://img.icons8.com/?size=100&id=62856&format=png&color=000000',
//         name: 'GIT/GITHUB'
//     },
// ]

// const Main = () => {
//     return (
//         <div className=' p-4 w-full  md:w-[60%] m-auto'>
//             {/* Main Contente */}
//             <div className=' flex items-center justify-between p-10'>
//                 <img src='https://avatars.githubusercontent.com/u/143220439?s=400&u=834617af58a4d2ca52a950a265593b91969a071f&v=4' className=' border w-[200px] rounded-full  h-[200px]' />
//                 <div className='w-[70%] font-bold '>
//                     <h2 className=' text-3xl py-5 text-white'>Hey, I'm Nitin. <span className=' text-gray-500'> I'm a Full Stack </span></h2>
//                     <span className=' flex font-bold items-center'>
//                         <p className=' text-2xl text-gray-500'  >Software Developer.</p>
//                         <span className=' flex items-center ml-10 bg-green-600/20 h-[32px] w-[180px] rounded-full'>
//                             <Dot className=' text-green-600/20  ml-3' />
//                             <p className=' text-lg text-green-400 '>Open to work</p>
//                         </span>
//                     </span>
//                 </div>
//             </div>

//             {/*  Tech Stack */}
//             <div className='w-full   md:w-[100%] mt-10 p-2 m-auto'>
//                 <h2 className=' text-2xl font-bold text-white'><b>Tech stack</b></h2>
//                 <div className=' flex flex-wrap gap-10 mt-10 '>
//                     {
//                         tech?.map((item) => {
//                             return (
//                                 <div className='Box flex  items-center flex-col border-gray-900 cursor-pointer justify-center w-[143px] rounded-md h-[96px] p-12 border' key={item?.id}>
//                                     <img className='object-contain logo' src={item?.url} />
//                                     <p className=' text-white mt-2'>{item?.name}</p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>

//             {/* Work Exprence */}
//             <div id='workExprence' className='w-full   md:w-[100%] mt-10 p-2 m-auto'>
//                 <h2 className=' text-2xl font-bold text-white'><b>Work Experience</b></h2>
//                 <div className=' flex gap-1 text-white  p-1.5 mt-10'>
//                     <div className=' w-full'><p className=' text-lg text-gray-400  font-semibold'>2024 - 2025</p></div>
//                     <div className=' ml-10 -mt-2'>
//                         <h3 className=' text-2xl'>Frontend Developer (contract)</h3>
//                         <p className=' text-gray-400 py-2'>Neetsupport.com • Full-time</p>
//                         <p className=' mt-2 text-gray-400 py-2'>At NeetSupport, I worked as a frontend developer where I built the complete frontend of the platform using React.js. I focused on
//                             creating a clean, responsive, and user-friendly design. My main tasks included building reusable components, connecting APIs, fixing UI
//                             bugs, and improving performance to make the site faster and smoother. I also created features like OTP verification, real-time chat
//                             using Chat.js to display messages, and added beautiful popup alerts for success and error messages to improve user experience. I used
//                             Git for version control and worked closely with the backend team to ensure everything worked perfectly together.</p>
//                     </div>
//                 </div>
//                 <div className=' flex gap-1 text-white  p-1.5 mt-10'>
//                     <div className=' w-full'><p className=' text-lg text-gray-400  font-semibold'>2023 - 2024</p></div>
//                     <div className=' ml-10 -mt-2'>
//                         <h3 className=' text-2xl'>Mern stack Developer</h3>
//                         <p className=' text-gray-400 py-2'>IQuanta.in • Full-time</p>
//                         <p className=' mt-2 text-gray-400 py-2'> At iQuanta.in, I worked as a frontend developer and had one of my best learning experiences. We were building an education platform
//                             from scratch for over 4 lakh students. I worked with multiple technologies like React.js, Redux, TailwindCSS, Next.js, MUI, and Chakra
//                             UI. My main tasks included building the frontend UI, integrating APIs, and developing features like a chat application. I focused on
//                             creating reusable components, fixing frontend bugs, solving UI issues, and improving overall performance. I also handled Git conflicts,
//                             collaborated closely with the team, and made sure the platform ran smoothly and looked great for users.</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Project */}
//             <div id='project' className='w-full   md:w-[100%] mt-10 p-2 m-auto relative '>
//                 <h2 className=' text-2xl font-bold text-white'><b>Projects</b></h2>
//                 <div className=' absolute flex items-center justify-center bg-gray-700  cursor-pointer -right-14 top-10 w-[40px]  text-center  h-[40px] rounded-full '>
//                     <SquareArrowOutUpRight size={18} color='white' />
//                 </div>
//                 <div className=' w-[100%] border rounded-md mt-5 text-gray-600  p-4'>
//                     <img className=' w-full rounded-md' src='https://sdmntprwestus2.oaiusercontent.com/files/00000000-0bb0-61f8-a160-dff178e51256/raw?se=2025-07-27T14%3A28%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=f9b58173-2a4a-5f75-8a3a-7ff32cecaf47&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-26T20%3A18%3A32Z&ske=2025-07-27T20%3A18%3A32Z&sks=b&skv=2024-08-04&sig=%2BRUdZfAbYArmMir5A%2BLiVtY3EafnxXnpKl362aQFekw%3D' />
//                     <h4 className=' text-white  mt-5 text-lg'><b>Youtube Clone</b></h4>
//                     <p className=' text-base mt-4 text-gray-400 '>I built a YouTube clone using the MERN stack as part of an Internshala Training project, gaining hands-on experience in full-stack development, video streaming, and responsive UI design.</p>
//                     <div className=' mt-5 flex font-semibold justify-between  '>
//                         <a target='_blanck' href='https://www.creatorslens.in/'>
//                         <button className=' w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer  flex gap-2 justify-center items-center text-white rounded-full '>  <Globe size={16} /> LIVE DEMO</button>
//                         </a>
//                         <a target='_blanck' href='https://github.com/nitin01010'>
//                         <button className=' w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full '>  <Github size={16} />SOURCE CODE</button>
//                         </a>
//                         <a target='_blanck' href='https://www.youtube.com/@Nitindevtech'>
//                         <button className=' w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full '>  <Globe size={16} /> WATCH VIDEO</button>
//                         </a>
//                     </div>
//                 </div>

//             </div>

//             {/* Footer */}
//             <hr className='  mt-10 text-gray-800  ' />

//             <div id='contract' className='flex items-center cursor-pointer gap-2 text-white py-4'>
//                 <Mail size={17} color='gray' />
//                 <a target='_blanck' href='mailto:nitinsachdeva0202@gmail.com'>
//                     <p className='text-gray-500'>nitinsachdeva0202@gmail.com</p>
//                 </a>
//             </div>

//         </div>
//     )
// }

// export default Main
import { Dot, Github, Globe, Mail, SquareArrowOutUpRight } from 'lucide-react'

const tech = [
    { id: 1, url: 'https://www.stefantopalovic.com/html-icon.svg', name: 'HTML' },
    { id: 2, url: 'https://www.stefantopalovic.com/css-icon.svg', name: 'CSS' },
    { id: 3, url: 'https://www.stefantopalovic.com/javascript-icon.svg', name: 'JAVASCRIPT' },
    { id: 4, url: 'https://www.stefantopalovic.com/react-icon.svg', name: 'REACT' },
    { id: 5, url: 'https://www.stefantopalovic.com/tailwind-icon.svg', name: 'TAILWINDCSS' },
    { id: 6, url: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000', name: 'NODE.JS' },
    { id: 7, url: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp', name: 'EXPRESS.JS' },
    { id: 8, url: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000', name: 'MONGODB' },
    { id: 9, url: 'https://img.icons8.com/?size=100&id=b6vIINYN0kfW&format=png&color=000000', name: 'REDUX' },
    { id: 10, url: 'https://img.icons8.com/?size=100&id=62856&format=png&color=000000', name: 'GIT/GITHUB' },
]

const Main = () => {
    return (
        <div className='p-4 w-full md:w-[60%] m-auto'>
            {/* Main Content */}
            <div className='flex flex-col md:flex-row items-center justify-between p-10'>
                <img src='https://avatars.githubusercontent.com/u/143220439?s=400&u=834617af58a4d2ca52a950a265593b91969a071f&v=4' className='border w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full object-cover' />
                <div className='w-full md:w-[70%] font-bold text-center md:text-left'>
                    <h2 className='text-3xl py-5 text-white'>Hey, I'm Nitin. <span className='text-gray-500'> I'm a Full Stack </span></h2>
                    <div className='flex flex-col sm:flex-row font-bold items-center justify-center md:justify-start gap-4'>
                        <p className='text-2xl text-gray-500'>Software Developer.</p>
                        <span className='flex items-center bg-green-600/20 h-[32px] px-4 rounded-full'>
                            <Dot className='text-green-600/20' />
                            <p className='text-lg text-green-400'>Open to work</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className='w-full mt-10 p-2 m-auto'>
                <h2 className='text-2xl font-bold text-white'><b>Tech stack</b></h2>
                <div className='flex flex-wrap justify-center gap-10 mt-10'>
                    {tech.map((item) => (
                        <div className='Box flex items-center flex-col border-gray-900 cursor-pointer justify-center w-[143px] rounded-md h-[96px] p-12 border' key={item?.id}>
                            <img className='object-contain logo h-[32px]' src={item?.url} alt={item?.name} />
                            <p className='text-white mt-2'>{item?.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Work Experience */}
            <div id='workExprence' className='w-full mt-10 p-2 m-auto'>
                <h2 className='text-2xl font-bold text-white'><b>Work Experience</b></h2>

                <div className='flex flex-col sm:flex-row gap-1 text-white p-1.5 mt-10'>
                    <div className='w-full sm:w-auto'>
                        <p className='text-lg text-gray-400 font-semibold'>2024 - 2025</p>
                    </div>
                    <div className='sm:ml-10 -mt-2'>
                        <h3 className='text-2xl'>Frontend Developer (contract)</h3>
                        <p className='text-gray-400 py-2'>Neetsupport.com • Full-time</p>
                        <p className='mt-2 text-gray-400 py-2'>
                            At NeetSupport, I worked as a frontend developer where I built the complete frontend of the platform using React.js. I focused on
                            creating a clean, responsive, and user-friendly design. My main tasks included building reusable components, connecting APIs, fixing UI
                            bugs, and improving performance to make the site faster and smoother. I also created features like OTP verification, real-time chat
                            using Chat.js to display messages, and added beautiful popup alerts for success and error messages to improve user experience. I used
                            Git for version control and worked closely with the backend team to ensure everything worked perfectly together.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-1 text-white p-1.5 mt-10'>
                    <div className='w-full sm:w-auto'>
                        <p className='text-lg text-gray-400 font-semibold'>2023 - 2024</p>
                    </div>
                    <div className='sm:ml-10 -mt-2'>
                        <h3 className='text-2xl'>Mern stack Developer</h3>
                        <p className='text-gray-400 py-2'>IQuanta.in • Full-time</p>
                        <p className='mt-2 text-gray-400 py-2'>
                            At iQuanta.in, I worked as a frontend developer and had one of my best learning experiences. We were building an education platform
                            from scratch for over 4 lakh students. I worked with multiple technologies like React.js, Redux, TailwindCSS, Next.js, MUI, and Chakra
                            UI. My main tasks included building the frontend UI, integrating APIs, and developing features like a chat application. I focused on
                            creating reusable components, fixing frontend bugs, solving UI issues, and improving overall performance. I also handled Git conflicts,
                            collaborated closely with the team, and made sure the platform ran smoothly and looked great for users.
                        </p>
                    </div>
                </div>
            </div>

            {/* Project */}
            <div id='project' className='w-full mt-10 p-2 m-auto relative'>
                <h2 className='text-2xl font-bold text-white'><b>Projects</b></h2>
                <div className='absolute flex items-center justify-center bg-gray-700 cursor-pointer -right-4 md:-right-14 top-10 w-[40px] h-[40px] rounded-full'>
                    <SquareArrowOutUpRight size={18} color='white' />
                </div>
                <div className='w-full border rounded-md mt-5 text-gray-600 p-4'>
                    <img className='w-full rounded-md' src='https://sdmntprwestus2.oaiusercontent.com/files/00000000-0bb0-61f8-a160-dff178e51256/raw?se=2025-07-27T14%3A28%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=f9b58173-2a4a-5f75-8a3a-7ff32cecaf47&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-26T20%3A18%3A32Z&ske=2025-07-27T20%3A18%3A32Z&sks=b&skv=2024-08-04&sig=%2BRUdZfAbYArmMir5A%2BLiVtY3EafnxXnpKl362aQFekw%3D' />
                    <h4 className='text-white mt-5 text-lg'><b>Youtube Clone</b></h4>
                    <p className='text-base mt-4 text-gray-400'>
                        I built a YouTube clone using the MERN stack as part of an Internshala Training project, gaining hands-on experience in full-stack development, video streaming, and responsive UI design.
                    </p>
                    <div className='mt-5 flex flex-col sm:flex-row font-semibold justify-between gap-4'>
                        <a target='_blank' href='https://www.creatorslens.in/'>
                            <button className='w-full sm:w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full'>
                                <Globe size={16} /> LIVE DEMO
                            </button>
                        </a>
                        <a target='_blank' href='https://github.com/nitin01010'>
                            <button className='w-full sm:w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full'>
                                <Github size={16} /> SOURCE CODE
                            </button>
                        </a>
                        <a target='_blank' href='https://www.youtube.com/@Nitindevtech'>
                            <button className='w-full sm:w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full'>
                                <Globe size={16} /> WATCH VIDEO
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <hr className='mt-10 text-gray-800' />
            <div id='contract' className='flex items-center cursor-pointer gap-2 text-white py-4'>
                <Mail size={17} color='gray' />
                <a target='_blank' href='mailto:nitinsachdeva0202@gmail.com'>
                    <p className='text-gray-500 break-all'>nitinsachdeva0202@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default Main