import React, { useState } from "react"
import Logo from "../img/logo1.png";
import Download from "../img/download.png";
import { Menu, X } from 'lucide-react';
import ButtonSidebar from "../components/buttonSidebar";


const Header = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className=" flex items-center justify-between w-[100%]  h-[104px] bg-white text-black">
      <div className=" flex items-center w-[140px] h-[40px] px-0   sm:px-18">
        <img src={Logo} className=" w-[40px] h-[40px]" />
        <h5 className=" font-bold text-lg px-3 text-[#000000]">Personal</h5>
      </div>
      <ul className=" font-bold text-base gap-3  hidden md:flex">
        <a href="#about">
          <li className=" cursor-pointer w-[98px] h-[24px]">About Me</li>
        </a>
        <a href="#skills">
          <li className=" cursor-pointer w-[98px] h-[24px]">Skills</li>
        </a>
        <a href="#project">
          <li className=" cursor-pointer w-[98px] h-[24px]">Project</li>
        </a>
        <a href="#contact">
          <li className=" cursor-pointer w-[98px] h-[24px]">Contact Me</li>
        </a>
      </ul>
      <Menu onClick={() => setStatus(true)} className="  mr-4 absolute right-1 md:hidden " size={40} />
        <a  target="_blank" href="https://drive.google.com/file/d/1bGp8Wxa3hPyB7Xprc2jixcU-TanoadPC/view?usp=drive_link">
      <div className="  relative px-0 mr-2   sm:px-18  hidden md:flex " >
        <button className="  w-[153px] cursor-pointer h-[56px] text-lg bg-black text-white  ">Resume</button>
        <img className=" absolute  top-4.5  right-3 sm:right-20 " src={Download} />
      </div>
        </a>
      {
        status && (
          <div className=" flex flex-col gap-4 md:hidden bg-[#B5A886] blur-[10%] w-[100%] h-screen top-0 p-[14px] z-10 absolute py-30 ">
            <X onClick={()=>setStatus(false)} className=" absolute top-5 mr-4 right-1 " color="white" size={40} />
            <ButtonSidebar buttonText="About" link="about" />
            <ButtonSidebar buttonText="Skills" link="skill" />
            <ButtonSidebar buttonText="Project" link="project" />
            <ButtonSidebar buttonText="Contact Me" link="contact" />
          </div>
        )
      }
    </div>
  )
}


export default Header