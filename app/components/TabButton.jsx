import React from 'react'
import { motion } from "framer-motion"

const variants = {
    default: { width: 0},
    active: { width: "calc(100% - 0.80rem"},
}
const TabButton = ({ active, selectTab, children}) => {
const buttonClasses = active ? 'text-black ' : 'text-[#2e2e2e]'
  return (
    <button onClick={selectTab}>
        <p className= {`mr-3 font-semibold hover:text-[#706e6e] ${buttonClasses}`}>
            {children}
            </p>
            <motion.div 
            animate= {active ? "active" : "default"}
            variants={variants}
            className='h-1 bg-[#b32d2d] mt-1 mr-2'
            >
              

            </motion.div>

    </button>
  )
}

export default TabButton