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
                <li>AWS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
                <li>SQL</li>
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
                <li> ML/AI DevOps Engineer Intern at Carecam</li>
                <li> IoT Engineer Intern at Resync Technologies</li>
                <li> Data Analytics Intern at ASMPT </li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Engineering at National University of Singapore</li>
                <li>Exchange semester at The University of Texas at Austin for Spring 2024</li>
            </ul>
        )
    },
    {
        title: "Co-curricular and External activities",
        id: "co-curricular",
        content: (
            <ul className='list-disc pl-2'>
                <li>Am currently an Assistant Squash Coach at SheerSquash Academy and am involved in coaching children and beginners of all ages.</li>
                <li>Was a regular volunteer at NUS Students Community Service Club under Yishun Reading Odyssey and helped children with their reading and English.</li>
                <li>Was the Team Manager and a player in the NUS Varsity Cricket team.</li>
                <li>Was a volunteer feeder in NUS Cat Cafe, feeding 5 cats on a regular basis across different parts of campus.</li>
                <li>Was part of various CCAs in Eusoff Hall including squash, football as well as photography.</li>
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
            src="/images/me_in_USA.png"
            width={300}
            height={300}  />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h1 className="text-4xl font-bold text-[#2e2e2e] mb-4"> Introduction</h1>
                <p className="text-base lg:text-lg">
                I am a final-year Computer Engineering undergraduate at NUS and an NUS Merit Scholar, driven by a passion for solving problems through creative and innovative solutions.
                I have experience working with a range of tools and technologies, including Python, React and AWS, and I am always eager to learn and explore new ideas. 
                Beyond academics, I enjoy playing sports like squash and football, as well as engaging in strategic games like chess. I also have a strong interest in 
                machine learning and AI as well as in trading.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    >{" "}
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
                    <TabButton 
                    selectTab={() => handleTabChange("co-curricular")} 
                    active={tab === "co-curricular"}
                    >{" "}
                    Co-curricular and External activities{" "}
                    </TabButton>                                               
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection