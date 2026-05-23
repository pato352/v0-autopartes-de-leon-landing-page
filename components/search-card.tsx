"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const marcas = [
  { id: "nissan", name: "Nissan" },
  { id: "vw", name: "VW" },
  { id: "chevrolet", name: "Chevrolet" },
  { id: "ford", name: "Ford" },
  { id: "toyota", name: "Toyota" },
  { id: "honda", name: "Honda" },
  { id: "dodge", name: "Dodge" },
  { id: "kia", name: "Kia" },
]

// Genera años desde 1990 hasta 2026
const years = Array.from({ length: 37 }, (_, i) => (2026 - i).toString())

export function SearchCard() {
  const [selectedMarca, setSelectedMarca] = useState<string | null>(null)
  const [modelo, setModelo] = useState("")
  const [year, setYear] = useState("")

  const handleSearch = () => {
    const marcaText = selectedMarca ? marcas.find(m => m.id === selectedMarca)?.name : ""
    const message = `Hola, busco refacciones para ${marcaText} ${modelo} ${year}`.trim()
    window.open(
      `https://wa.me/524777624062?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="relative z-20 max-w-4xl mx-auto px-4 -mt-20 sm:-mt-24">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Busca tu refacción
        </h3>
        
        {/* Logos de marcas */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {marcas.map((marca) => (
            <button
              key={marca.id}
              onClick={() => setSelectedMarca(selectedMarca === marca.id ? null : marca.id)}
              className={cn(
                "px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all",
                "grayscale hover:grayscale-0",
                selectedMarca === marca.id
                  ? "border-[#1E3A8A] bg-[#1E3A8A]/5 grayscale-0 text-[#1E3A8A]"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
              )}
            >
              {marca.name}
            </button>
          ))}
        </div>

        {/* Inputs de búsqueda */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Modelo (ej: Tsuru, Jetta, Aveo)"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="flex-1"
          />
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Año" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={handleSearch}
            className="bg-[#25D366] hover:bg-[#1da851] text-white px-6"
          >
            <Search className="w-4 h-4 mr-2" />
            Buscar refacción
          </Button>
        </div>

        {/* Texto de ayuda */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          También puede llamarnos o mandarnos foto por WhatsApp y te cotizamos.
        </p>
      </div>
    </div>
  )
}
