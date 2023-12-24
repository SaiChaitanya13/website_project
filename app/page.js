import Image from 'next/image'
import IntroSection from './components/IntroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectSection'
import CustomCursor from './components/CustomCursor'

// credits to Judy from webdecoded for the great Youtube tutorials on portfolio website which helped me with this

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff0f0]">
      <CustomCursor/>
      <NavBar> <CustomCursor/> </NavBar>
      <div class="container mt-24 mx-auto px-12 py-4">
        <IntroSection/>
        <AboutSection/>
        <ProjectsSection/>
        </div>
    </main>
  )
}
