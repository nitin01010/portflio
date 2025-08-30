import { Dot, Github, Globe, Mail, SquareArrowOutUpRight } from 'lucide-react'
import TechStack from './techStack'
import Profile from './profile'
import Experience from './experience'
import Project from './project'
import SocialMediaIcons from './SocialMediaIcons'



const Main = () => {
    return (
        <div className='p-2 w-full md:w-[60%] m-auto'>
            <Profile />
            <TechStack />
            <Experience />

            <Project />

            {/* Footer */}
            <hr className='mt-10 text-gray-800' />
            <div id='contract' className='flex items-center cursor-pointer gap-2 text-white py-4'>
                <Mail size={17} color='gray' />
                <a target='_blank' href='mailto:nitinsachdeva0202@gmail.com'>
                    <p className='text-gray-500 break-all'>nitinsachdeva0202@gmail.com</p>
                </a>
            </div>
            <SocialMediaIcons />
        </div>
    )
}

export default Main