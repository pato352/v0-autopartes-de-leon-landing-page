import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categorias = [
  {
    id: "motor",
    title: "Motor",
    description: "Pistones, bielas, juntas y más",
    image: "/images/cat-motor.jpg",
  },
  {
    id: "frenos",
    title: "Frenos",
    description: "Balatas, discos y calipers",
    image: "/images/cat-frenos.jpg",
  },
  {
    id: "suspension",
    title: "Suspensión",
    description: "Amortiguadores, resortes y bujes",
    image: "/images/cat-suspension.jpg",
  },
  {
    id: "electrico",
    title: "Sistema eléctrico",
    description: "Baterías, alternadores y sensores",
    image: "/images/cat-electrico.jpg",
  },
  {
    id: "transmision",
    title: "Transmisión",
    description: "Cajas, embragues y volantes",
    image: "/images/cat-transmision.jpg",
  },
  {
    id: "filtros",
    title: "Filtros",
    description: "Aceite, aire, gasolina y cabina",
    image: "/images/cat-filtros.jpg",
  },
  {
    id: "accesorios",
    title: "Accesorios",
    description: "Bujías, llantas, escobillas y más",
    image: "/images/cat-accesorios.jpg",
  },
  {
    id: "lubricantes",
    title: "Lubricantes",
    description: "Aceites de motor y transmisión",
    image: "/images/cat-lubricantes.jpg",
  },
]

export function Categories() {
  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Categorías de refacciones
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Encuentra la pieza que necesitas en nuestro amplio catálogo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria) => {
            const whatsappMessage = `Hola, me interesa cotizar refacciones de ${categoria.title}, ¿tienen disponibilidad?`
            const whatsappUrl = `https://wa.me/524777624062?text=${encodeURIComponent(whatsappMessage)}`

            return (
              <Card
                key={categoria.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={categoria.image}
                    alt={categoria.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {categoria.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {categoria.description}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 h-auto mt-3 text-[#25D366] hover:text-[#1da851]"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Cotizar por WhatsApp
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
