"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'> 
                <li>Python</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
                <li>PostgreSQL</li>
                <li>RTOS</li>
                <li>Neo4j</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li> Data Analytics Intern at ASMPT </li>
                <li> IT Help Desk Support at CTC Global Pte Ltd</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Engineering student at National University of Singapore</li>
                <li>Exchange student at University of Texas at Austin</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
    <section className="text-[#494949]" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
            src="/images/me_playing_squash.png"
            width={300}
            height={300}  />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h1 className="text-4xl font-bold text-[#2e2e2e] mb-4"> Introduction</h1>
                <p className="text-base lg:text-lg">
                    I am a penultimate year Computer Engineering undergraduate at the School of Computing at NUS. 
                    I am an aspiring software enginer and want to solve problems with creative solutions. 
                    I have experience working with React, Python, Java, C++ and Git to name a few.
                    I am someone who wants to keep learning more and trying out new things! 
                    My hobbies include playing sports such as squash and football as well as chess. 
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    >
                    {" "}
                    Skills{" "}
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("experience")} 
                    active={tab === "experience"}
                    >{" "}
                    Experience{" "}
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                    >{" "}
                    Education{" "}
                    </TabButton>                                        
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection