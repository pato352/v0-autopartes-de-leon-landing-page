"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-[#1E3A8A] text-lg">Autopartes</span>
              <span className="font-medium text-gray-600 text-lg ml-1">De León</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button Desktop */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#1da851] text-white"
            >
              <a
                href="https://wa.me/524777624062?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20una%20refacción"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#1E3A8A]"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 hover:text-[#1E3A8A] font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#1da851] text-white mt-2"
            >
              <a
                href="https://wa.me/524777624062?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20una%20refacción"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
