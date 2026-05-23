import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/524777624062?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20una%20refacción"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1da851] transition-colors animate-pulse-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
