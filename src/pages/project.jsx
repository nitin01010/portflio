import React from 'react'
import ProjectBox from '../components/projectBox'
import LibrariImg from "../img/libraru.jpg";
import Ecommerce from "../img/ecommerce.png";
import PortflioWeb from "../img/portflioWeb.png";


const Project = () => {
  return (
    <div className=' text-white p-[16px]  sm:p-[80px] '>
      <div id='project' className=' p-0 sm:p-[32px]'>
        <p className=' text-3xl text-center py-5 sm:py-0 '>My <b className=' font-bold'>Projects</b></p>
        <ProjectBox
          number={"01"}
          title="Library Management System"
          descripition={
            `
            The Library Management System is a web-based application developed by Evren Shah that allows efficient management of books, users, and library operations. It includes full CRUD functionality (Create, Read, Update, Delete) for managing records such as books and members. The system also features authentication and role-based access control, ensuring that different users (like Admins, Librarians, and Members) have appropriate permissions within the application.
            This project demonstrates a clean and secure architecture, following modern development practices for handling user data and maintaining system integrity.
            `
          }
          img={LibrariImg}
          link={''}
        />
        <ProjectBox
          number={"02"}
          title="E-Commerce Web Application"
          descripition={
            `
           Developed a full-stack e-commerce web application using MERN stack (MongoDB, Express, React, Node.js) with Redux for state
management, enabling users to browse products, manage carts, and place orders.
            `
          }
          img={Ecommerce}
          link={'https://www.creatorslens.in'}
        />
        <ProjectBox 
        number={"03"}
          title="Portfolio  Website"
          descripition={
            `
           Developed a personal portfolio website using React.js to showcase projects, skills, and experience with a clean and responsive
design.
            `
          }
        link={'https://www.nitindev.tech'}
        img={PortflioWeb}
        />
      </div>
    </div>
  )
}

export default Project