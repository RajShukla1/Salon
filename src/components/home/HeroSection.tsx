"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import businessData from "../../../config/business.json";
import { Clock, Star, Users, MapPin } from "lucide-react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simple logic to check if open today based on local time
    const checkOpenStatus = () => {
      const now = new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDay = days[now.getDay()];
      const hoursToday = businessData.hours[currentDay as keyof typeof businessData.hours];
      
      if (hoursToday === "Closed") {
        setIsOpen(false);
        return;
      }

      const [openStr, closeStr] = hoursToday.split(" - ");
      const [openHour, openMin] = openStr.split(":").map(Number);
      const [closeHour, closeMin] = closeStr.split(":").map(Number);
      
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const openTime = openHour * 60 + openMin;
      const closeTime = closeHour * 60 + closeMin;
      
      setIsOpen(currentTime >= openTime && currentTime <= closeTime);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const whatsappMsg = "Hello, I want to book an appointment.";
  const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="home" className="relative bg-black-pure text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
          alt="Barber Shop Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-gold/30 backdrop-blur-sm mb-6">
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm font-medium text-gold">
              {isOpen ? t.status.openNow : t.status.closedNow}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight">
            Premium Grooming <br className="hidden md:block" />
            <span className="text-gold">Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {businessData.tagline[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-black-pure px-8 py-4 rounded-md font-bold text-lg transition-all text-center transform hover:scale-105"
            >
              {t.hero.bookAppointment}
            </a>
            <a
              href={businessData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:border-gold hover:text-gold text-white px-8 py-4 rounded-md font-bold text-lg transition-colors text-center flex items-center justify-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
            <div>
              <div className="flex items-center gap-2 text-gold mb-1">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-xl font-bold">{businessData.stats.rating}</span>
              </div>
              <p className="text-sm text-gray-400">{t.stats.rating}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gold mb-1">
                <Clock className="h-5 w-5" />
                <span className="text-xl font-bold">{businessData.stats.experience}</span>
              </div>
              <p className="text-sm text-gray-400">{t.stats.experience}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gold mb-1">
                <Users className="h-5 w-5" />
                <span className="text-xl font-bold">{businessData.stats.customers}</span>
              </div>
              <p className="text-sm text-gray-400">{t.stats.customers}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
