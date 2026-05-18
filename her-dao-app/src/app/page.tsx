import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import ServiceCards from "@/components/sections/ServiceCards"
import FeaturedProjects from "@/components/sections/FeaturedProjects"
import Achievement from "@/components/sections/Achievement"
import Footer from "@/components/layout/Footer"
import RustSchoolBanner from "@/components/sections/RustSchoolBanner"

export default function Home() {
  return (
    <main>
      <div style={{ position: 'sticky', top: 0, zIndex: 1002, width: '100%' }}>
        <RustSchoolBanner />
        <Navbar />
      </div>
      <Hero />
      <div className="main-content">
        <About />
        <FeaturedProjects />
        <ServiceCards />
        <Achievement />
        <Footer />
      </div>
    </main>
  )
}
