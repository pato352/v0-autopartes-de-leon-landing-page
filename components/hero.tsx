import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Taller mecánico profesional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay - más oscuro a la izquierda para legibilidad */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Toda refacción para tu auto en un solo lugar
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed text-pretty">
            Más de 30 años surtiendo a mecánicos y conductores de León y el Bajío. 
            Servicio al mayoreo y menudeo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#1da851] text-white text-lg px-8"
            >
              <a
                href="https://wa.me/524777624062?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20una%20refacción"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white text-lg px-8"
            >
              <a href="#catalogo">Ver catálogo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
