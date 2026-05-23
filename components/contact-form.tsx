"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    vehiculo: "",
    refaccion: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hola, me gustaría solicitar una cotización:

*Nombre:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Vehículo:* ${formData.vehiculo}
*Refacción que busco:* ${formData.refaccion}`

    window.open(
      `https://wa.me/524777624062?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Solicitar cotización
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Te respondemos en menos de 1 hora por WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <Input
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono
            </label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="477 123 4567"
              required
            />
          </div>

          <div>
            <label htmlFor="vehiculo" className="block text-sm font-medium text-gray-700 mb-2">
              Marca/Modelo del auto
            </label>
            <Input
              id="vehiculo"
              name="vehiculo"
              value={formData.vehiculo}
              onChange={handleChange}
              placeholder="Ej: Nissan Tsuru 2015"
              required
            />
          </div>

          <div>
            <label htmlFor="refaccion" className="block text-sm font-medium text-gray-700 mb-2">
              Refacción que busca
            </label>
            <Textarea
              id="refaccion"
              name="refaccion"
              value={formData.refaccion}
              onChange={handleChange}
              placeholder="Describe la refacción que necesitas..."
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#25D366] hover:bg-[#1da851] text-white text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar cotización
          </Button>
        </form>
      </div>
    </section>
  )
}
