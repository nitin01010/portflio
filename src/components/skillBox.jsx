import React from "react"

const SkillBox = ({ data,index }) => {
    return (
        <div data-aos="fade-down" key={index} className="card red flex  transition ease-linear items-center justify-center  hover:bg-black w-[161.5px] h-[160px]  sm:w-[186px]  sm:h-[186px] border rounded-sm">
            <img src={data} className=" w-[56px] h-[56px]" />
        </div>
    )
}

export default SkillBox