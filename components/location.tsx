import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "San Juan de Los Lagos 905, León GTO",
    href: "https://maps.google.com/?q=San+Juan+de+Los+Lagos+905,+León+de+los+Aldama,+Guanajuato",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "477 762 4062",
    href: "tel:+524777624062",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 477 762 4062",
    href: "https://wa.me/524777624062?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20una%20refacción",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "L-V 9 am - 7 pm | Sáb 9 am - 3 pm",
    href: null,
  },
]

export function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Imagen de la fachada */}
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de Autopartes De León"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay con título */}
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <h2 className="text-3xl sm:text-4xl font-bold text-white p-6">
                Visítanos en León
              </h2>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <Card key={info.label} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-gray-900 hover:text-[#1E3A8A] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8661377774774!2d-101.68837!3d21.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbeb9bd1d5b4d%3A0x5f44c7efb42b7c7f!2sSan%20Juan%20de%20Los%20Lagos%20905%2C%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.!5e0!3m2!1ses!2smx!4v1704067200000!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Autopartes De León"
          />
        </div>
      </div>
    </section>
  )
}
