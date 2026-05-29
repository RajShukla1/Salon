"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import servicesData from "../../../config/services.json";
import businessData from "../../../config/business.json";
import { Check } from "lucide-react";

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const handleBookService = (serviceName: string) => {
    const msg = `Hello, I want to book a ${serviceName} appointment.`;
    const url = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-black-pure dark:text-white mb-4">
            {t.sections.services}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-black-soft rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="bg-dark-gray text-gold px-6 py-4">
                <h3 className="text-xl font-bold">{category.category[language]}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-black-soft dark:text-white group-hover:text-gold transition-colors">
                          {item.name[language]}
                        </h4>
                        <span className="font-bold text-gold">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {item.description[language]}
                      </p>
                      <button
                        onClick={() => handleBookService(item.name.en)}
                        className="text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gold hover:border-gold hover:text-black-pure transition-colors flex items-center gap-1 w-full justify-center"
                      >
                        <Check className="h-3 w-3" />
                        {t.booking.bookService}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             {t.booking.viaWhatsapp}
          </p>
          <a
            href={`https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-dark text-black-pure px-8 py-3 rounded-md font-bold text-lg transition-colors shadow-lg"
          >
            {t.hero.bookAppointment}
          </a>
        </div>
      </div>
    </section>
  );
}
