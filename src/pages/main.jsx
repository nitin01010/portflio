import React from "react"
import MainSection from "./mainSection"
import Skill from "./skill"
import Experience from "./experience"
import About from "./about"
import Project from "./project"
import Testimonial from "./testimonial"
import Contact from "./contact"
import Footer from "./footer"


const Main = () => {
    return (
        <div>
            <MainSection />
            <Skill />
            <Experience />
            <About />
            <Project />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Main
