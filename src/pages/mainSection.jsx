import React from "react"
import Banner from "../img/Banner.png";
import ShareButton from "../components/shareButton";

const MainSection = () => {
    return (
        <div className=" h-[716px] p-[16px] sm:p-[80px] bg-white">
            <div className=" flex  flex-col-reverse  sm:flex-row">
                <div className=" w-full  flex  flex-wrap  sm:flex-col-reverse  relative  ">
                    <p className="text-3xl py-8 sm:py-0 sm:absolute sm:w-[500px] md:w-[600px]  top-4 sm:text-4xl   font-bold text-black  w-full lg:top-14  md:text-5xl tracking-wide lg:text-6xl lg:w-[800px] 2xl:text-7xl ">
                        Hello I’am  <br />
                        Nitin sachdeva. <br />
                        Mern Stack
                        Developer
                        <br />Based In
                        India.
                    </p>
                    <ShareButton />
                </div>
                <img src={Banner}  className="object-cover w-full h-[400px]    sm:h-[400px] md:w-[450px] lg:w-[889px]   lg:h-[596px] " />
            </div>
        </div>
    )
}

export default MainSection