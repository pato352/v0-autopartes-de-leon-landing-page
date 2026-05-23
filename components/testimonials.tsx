import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonios = [
  {
    name: "Carlos Méndez",
    role: "Mecánico",
    image: "/images/testimonio-mecanico.jpg",
    review:
      "Excelente servicio, muy amables, organizados y precios más baratos que en cualquier lado. Mi taller solo les compra a ellos.",
  },
  {
    name: "Roberto Hernández",
    role: "Dueño de taller",
    image: "/images/testimonio-dueno.jpg",
    review:
      "Siempre encuentran la refacción que ningún otro tiene. La asesoría es de primera, llevan 30 años en el negocio y se nota.",
  },
  {
    name: "Miguel Ángel R.",
    role: "Conductor particular",
    image: "/images/testimonio-cliente.jpg",
    review:
      "Llevo años comprándoles y nunca me han fallado. Precios justos y siempre tienen lo que busco.",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Más de 1,000 reseñas en Google nos respaldan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <Card key={testimonio.name} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonio.image}
                      alt={testimonio.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonio.name}</h3>
                    <p className="text-sm text-gray-600">{testimonio.role}</p>
                    <div className="mt-1">
                      <StarRating />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  &quot;{testimonio.review}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
