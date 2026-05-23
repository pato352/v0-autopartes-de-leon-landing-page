import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SearchCard } from "@/components/search-card"
import { Categories } from "@/components/categories"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      {/* Navbar fijo */}
      <Navbar />
      
      {/* Hero con fondo de imagen */}
      <Hero />
      
      {/* Buscador de refacciones superpuesto */}
      <SearchCard />
      
      {/* Categorías de refacciones */}
      <Categories />
      
      {/* Por qué elegirnos */}
      <WhyChooseUs />
      
      {/* Testimonios */}
      <Testimonials />
      
      {/* Ubicación */}
      <Location />
      
      {/* Formulario de contacto */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </main>
  )
}
