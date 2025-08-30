import React from 'react'
import * as motion from "motion/react-client"

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

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

const TechStack = () => {
    return (
        <div className='w-full mt-10 p-2 m-auto'>
            <h2 className='text-2xl font-bold text-white'><b>Tech stack</b></h2>
            <motion.div
                layout
                transition={spring}   // ✅ spring transition for layout changes
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10'
            >
                {tech.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}  // 👈 floating effect
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: index * 0.2,   // 👈 stagger effect
                        }}
                        className='Box flex items-center flex-col border-gray-900 cursor-pointer justify-center w-full rounded-md h-[96px] p-6 border'
                    >
                        <img
                            className='object-contain logo h-[32px]'
                            src={item.url}
                            alt={item.name}
                        />
                        <p className='text-white mt-2'>{item.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default TechStack
