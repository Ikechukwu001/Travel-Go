import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Offers from "@/components/Offers"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offers />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
