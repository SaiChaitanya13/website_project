"use client"
import React, {useState} from 'react'
import Link from "next/link"
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    }

]
const NavBar = () => {
    const[navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#fff0f0] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link 
                href={"/"} 
                className="text-2xl md:text-4xl text-[#494949] font-semibold">        
                </Link>
                
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)}className="flex items-center px-3 py-2 border rounded border-[#555555] hover:text-black hover:border-black text-[#555555]">
                          <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-[#555555] hover:text-black hover:border-black text-[#555555]">
                          <XMarkIcon className="h-5 w-5" /> 
                        </button>
                    )} 

            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}
                                ></NavLink>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null }      
    </nav>
  )
}

export default NavBar