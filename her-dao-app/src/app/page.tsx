import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import ServiceCards from "@/components/sections/ServiceCards"
import FeaturedProjects from "@/components/sections/FeaturedProjects"
import Achievement from "@/components/sections/Achievement"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <ServiceCards />
      <Achievement />
      <Footer />
    </main>
  )
}
