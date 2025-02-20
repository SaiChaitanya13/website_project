"use client"
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView} from "framer-motion"

const projectsData = [ 
    {
      id: 1,
      title: "2-player AR Laser Tag Game",
      description: "Developed a 2-player AR laser tag game where players wear sensors, perform actions, and view effects and HP updates through AR on a phone mounted in front of them. Led the AI development, designing and training a machine learning model to detect actions in real-time.",
      image: "",
      projectUrl: "https://github.com/kyrenechua/cg4002-b07"
    },
    {
      id: 2,
      title: "Predicting Credit Card Fraud Outliers",
      description: "Used various machine learning models to predict credit card fraud.",
      image: "/images/projects/creditcard.png",
      projectUrl: "https://drive.google.com/file/d/1R5QxzZ6abmolOG5Vrbx2oedLJDbmWsBm/view?usp=sharing",
    },
    {
      id: 3,
      title: "React Portfolio Website",
      description: "I created this website using React to improve my skills and learn more.",
      image: "/images/projects/website.png",
      projectUrl: "https://github.com/SaiChaitanya13/website_project",
    },
    {
      id: 4,
      title: "Real Time Operating Systems Project",
      description: "As a group, we built and programmed a robot using RTOS. We controlled it using a phone application to complete a maze as quickly as possible.",
      image: "/images/projects/cg2271.png",
      projectUrl: "https://www.youtube.com/watch?v=ne8cC6VkYxY",
    },
    {
      id: 5,
      title: "Buddy - A Task Tracking Cli Application",
      description: "I created a task tracking application on cli interface using Java where you can add different types of tasks and keep up to date with what you have to do.",
      image: "/images/projects/cs2113_ip.png",
      projectUrl: "https://github.com/SaiChaitanya13/ip/tree/master",
    },

    {
      id: 6, 
      title: "Spectrometer on FPGA",
      description: "Programmed a spectrometer using Verilog on a FPGA board which takes in audio and displays the waves on the screen proportional to the loudness.", 
      image: "/images/projects/ee2026.png",
      projectUrl: "https://docs.google.com/document/d/1BDFBgmgsoTI3junXD6xfHqtCPY6nGIaXp1vBAycItLY/edit?usp=sharing",
    },
    {
      id: 7,
      title: "Alex to the Rescue",
      description: "As a group, we used the Raspberry Pi and Arduino Uno to control a robot remotely. We then used Robot Operating System (ROS) and SLAM using the RP LIDAR to map out the surroundings of the robot in a maze without being able to see the robot directly.",
      image: "/images/projects/cg2111a.png",
      projectUrl: "https://docs.google.com/document/d/1T7aHa1twxmziyNFyplxXTZHA_vx8LeYlGYbeZItPM8Y/edit?usp=sharing",
    },
    {
      id: 8, 
      title: "Photosphere",
      description: "As a pair, we created a mobile application that allowed you to view 360-degrees images on your phone. I was mainly in charge of the frontend development of the application.",
      image: "/images/projects/orbital.png",
      projectUrl: "https://github.com/ollayf/photosphere"
    }

]


const ProjectsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    }
    
    return (
    <section id="projects">
      <h2 className='text-center text-4xl font-bold text-[#2e2e2e] mt-4 mb-4'>My Projects</h2>
      <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
          projectsData.map((project, index) => (
        <motion.li
        key={index} 
        variants={cardVariants} 
        initial="initial" 
        animate={isInView ? "animate" : "initial"}
        transition = {{ duration: 0.3, delay: index * 0.4}}
        >
          <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description} 
          imgUrl={project.image} 
          projectUrl={project.projectUrl}
          />
          </motion.li>
          ))}
      </ul>
    </section>


  )

    
}

export default ProjectsSection