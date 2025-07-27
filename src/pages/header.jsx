import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
    const [toggleStatus, setToggleStatus] = useState(false);

    return (
        <div className="flex items-center justify-between p-2 text-white w-full m-auto h-[70px] md:w-[60%] relative z-50">
            <h1 className="text-2xl font-bold text-gray-400 px-4">Nitindev.tech</h1>

            <nav className="hidden md:block">
                <ul className="flex items-center gap-10">
                    {/* workExprence */}
                    <a href='#workExprence'>
                        <li className="cursor-pointer hover:text-white text-gray-400" >Work Experience</li>
                    </a>
                    <a href='#project'>
                        <li className="cursor-pointer hover:text-white text-gray-400">Projects</li>
                    </a>
                    <a href='#contract'>
                        <li className="cursor-pointer hover:text-white text-gray-400">Contact</li>
                    </a>
                </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <Menu onClick={() => setToggleStatus(true)} className="block md:hidden mr-2 mt-1" />

            {/* Slide-in Menu from Left */}
            <div className={`fixed top-0 left-0 h-full text-center w-[100%] bg-black transform transition-transform duration-300 ease-in-out z-40 ${toggleStatus ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="flex justify-end p-4">
                    <X onClick={() => setToggleStatus(false)} size={30} className="cursor-pointer mt-5  text-white" />
                </div>
                <ul className="flex flex-col gap-10 mt-18 ml-6 text-lg">
                    <a href="#workExprence" onClick={() => setToggleStatus(false)}>
                        <li className="cursor-pointer text-3xl font-bold text-gray-300 hover:text-white">Work Experience</li>
                    </a>
                    <a href="#project" onClick={() => setToggleStatus(false)}>
                        <li className="cursor-pointer text-3xl font-bold text-gray-300 hover:text-white">Projects</li>
                    </a>
                    <a href="#contract" onClick={() => setToggleStatus(false)}>
                        <li className="cursor-pointer text-3xl font-bold text-gray-300 hover:text-white">Contact</li>
                    </a>
                </ul>
            </div>


        </div>
    );
};

export default Header;
