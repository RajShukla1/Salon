import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import businessData from "../../config/business.json";

export default function FloatingActions() {
  const whatsappMsg = "Hello, I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href={`tel:${businessData.phone}`}
        className="bg-dark-gray hover:bg-black text-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center border border-gray-700"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
