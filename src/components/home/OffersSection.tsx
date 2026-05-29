"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import offersData from "../../../config/offers.json";
import { Tag } from "lucide-react";

export default function OffersSection() {
  const { t, language } = useLanguage();

  if (!offersData || offersData.length === 0) return null;

  return (
    <section id="offers" className="py-20 bg-gold/10 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-black-pure dark:text-white mb-4">
            {t.sections.offers}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offersData.map((offer) => (
            <div key={offer.id} className="bg-white dark:bg-black-soft rounded-xl shadow-lg border border-gold/30 p-8 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 bg-gold text-black-pure text-xs font-bold px-3 py-1 rounded-bl-lg">
                Special Offer
              </div>
              <div className="bg-gold/20 p-4 rounded-full mb-6">
                <Tag className="h-8 w-8 text-gold-dark" />
              </div>
              <h3 className="text-2xl font-bold text-black-pure dark:text-white mb-4">{offer.title[language]}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{offer.description[language]}</p>
              
              {offer.code && (
                <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg border border-dashed border-gray-400 dark:border-gray-600 w-full">
                  <span className="text-sm text-gray-500 block mb-1">Use Code</span>
                  <span className="font-mono font-bold text-lg text-black-pure dark:text-white tracking-widest">{offer.code}</span>
                </div>
              )}
              {offer.price && (
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Only at</span>
                  <span className="block text-3xl font-bold text-gold">{offer.price}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
