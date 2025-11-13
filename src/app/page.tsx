import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectSection from '@/components/ProjectSection'
import Skills from '@/components/Skills'
import ContactSection from '@/components/ContactSection'

function page() {
  return (
    <div className="bg-black min-h-screen text-white" >
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <ProjectSection/>
      <Skills/>
      <ContactSection/>

      
    </div>
  )
}

export default page