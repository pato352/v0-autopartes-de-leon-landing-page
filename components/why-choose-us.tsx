import Image from "next/image"
import { Package, DollarSign, HeadphonesIcon, Truck } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "Inventario amplio",
    description: "3000+ refacciones disponibles",
  },
  {
    icon: DollarSign,
    title: "Precios mayoristas",
    description: "Los mejores precios de la zona, mayoreo y menudeo",
  },
  {
    icon: HeadphonesIcon,
    title: "Asesoría experta",
    description: "Te ayudamos a encontrar la pieza correcta",
  },
  {
    icon: Truck,
    title: "Envío a todo el Bajío",
    description: "Entregamos a refaccionarias y talleres",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen del almacén */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/almacen-interior.jpg"
              alt="Interior del almacén de Autopartes De León"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Contenido */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Más de 30 años nos respaldan como una de las refaccionarias más 
              confiables de León
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#1E3A8A]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
