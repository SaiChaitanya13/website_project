"use client"
import { useRef } from "react";
import { useEffect } from "react";

// custom cursor inspired from https://rushankshah65.medium.com/how-to-add-a-custom-cursor-in-nextjs-application-bd7564cd7b54

export default function CustomCursor() {
     const cursorRef = useRef(null)
     useEffect(() => {
     if (cursorRef.current == null || cursorRef == null)
          return;
     document.addEventListener('mousemove', e => {
          if (cursorRef.current == null)
               return;
          cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
     })
     document.addEventListener('click', () => {
     if (cursorRef.current == null)
          return;
     cursorRef.current.classList.add("expand");
     setTimeout(() => {
          if (cursorRef.current == null)
               return;
          cursorRef.current.classList.remove("expand");
     }, 500)
     })
     }, [])
     return (
     <div className='cursor' ref={cursorRef}>
     </div>
     )
     }