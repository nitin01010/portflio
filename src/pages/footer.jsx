import React from 'react'
import Logo from "../img/logo1.png";

const Footer = () => {
  return (
    <div className=' flex justify-between  flex-col sm:flex-row items-start py-10 gap-10 sm:items-center text-white bg-black h-full sm:h-[100px]'>
      <div className=' flex gap-5 text-xl items-center  font-bold px-4 sm:px-0'>
        <img src={Logo} className="rounded-[1px] w-[40px] bg-white h-[40px] ml-0 sm:ml-26" />
        <p className=' text-3xl font-extrabold '><b>Personal</b></p>
      </div>
      <div className=' text-gray-300 py-3  px-4 sm:px-0 sm:mr-26'>
        <p>@2023 Personal</p>
        <p>Made In Figma</p>
      </div>
    </div>                
  )
}

export default Footer