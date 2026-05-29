"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import businessData from "../../../config/business.json";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-black-pure dark:text-white mb-4">
            {t.nav.contact}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-black p-8 rounded-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-black-pure dark:text-white">Visit Us</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black-soft dark:text-gray-200">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{businessData.address[language]}</p>
                    <a href={businessData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold text-sm font-semibold mt-2 inline-block hover:underline">
                      Get Directions
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black-soft dark:text-gray-200">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{businessData.phone}</p>
                    <a href={`tel:${businessData.phone}`} className="text-gold text-sm font-semibold mt-2 inline-block hover:underline">
                      Call Now
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-semibold text-black-soft dark:text-gray-200 mb-2">Business Hours</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {Object.entries(businessData.hours).map(([day, hours]) => (
                        <li key={day} className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-1 last:border-0">
                          <span>{day}</span>
                          <span className="font-medium">{hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            {/* Embed Google Maps using simple iframe with the query */}
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(businessData.address.en)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
