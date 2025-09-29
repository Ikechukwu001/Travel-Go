import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Offers from "@/Components/Offers"
import About from "@/Components/About"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"

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
