import React from "react"
import SkillBox from "../components/skillBox"
import Html from '../img/html.png';
import Css from '../img/css.png';
import Javascript from '../img/js.png';
import ReactIcon from '../img/programing.png';
import Node from '../img/node.png';
import Express from '../img/express.png';
import Mongodb from '../img/mongoose.png';
import Git from '../img/gitgithub.png';
import Redux from '../img/redux.png';
import TailwindCss from '../img/tailwindCss.png';
import ReactQuary from '../img/react-query-logo-png_seeklogo-435661.png';
let data = [Html, Css, Javascript, ReactIcon, Node, Express, Mongodb, Git, Redux, TailwindCss, ReactQuary]


const Skill = () => {
    return (
        <div className=" p-[16px] sm:p-[80px] bg-white text-black" id="skills">
            <p className=" text-4xl text-center mb-10">My <b className=" font-bold">Skills</b> </p>
            <div className="h-full  sm:h-[608px] grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
                {
                    data?.map((item, index) => {
                        return (
                            <SkillBox index={index} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skill