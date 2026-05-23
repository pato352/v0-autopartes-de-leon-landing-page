import Link from "next/link"
import { Phone, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react"

const categorias = [
  "Motor",
  "Frenos",
  "Suspensión",
  "Sistema eléctrico",
  "Transmisión",
  "Filtros",
  "Accesorios",
  "Lubricantes",
]

export function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Sobre nosotros */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Autopartes De León</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Somos una refaccionaria con más de 30 años de experiencia en León, 
              Guanajuato. Nos especializamos en ofrecer refacciones de calidad al 
              mayoreo y menudeo para mecánicos, talleres y conductores particulares 
              de todo el Bajío.
            </p>
          </div>

          {/* Columna 2: Categorías */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {categorias.map((categoria) => (
                <li key={categoria}>
                  <Link 
                    href="#catalogo" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {categoria}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto rápido */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto rápido</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+524777624062"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  477 762 4062
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/524777624062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  +52 477 762 4062
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  San Juan de Los Lagos 905, León GTO
                </span>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
          <p>
            © 2026 Autopartes De León S.A. de C.V. — Todos los derechos reservados | 
            Diseñado en León GTO
          </p>
        </div>
      </div>
    </footer>
  )
}
