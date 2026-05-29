"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import testimonialsData from "../../../config/testimonials.json";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { t, language } = useLanguage();

  if (!testimonialsData || testimonialsData.length === 0) return null;

  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-black-soft border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-black-pure dark:text-white mb-4">
            {t.sections.reviews}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-black rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.review[language]}"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-black-pure font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black-pure dark:text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
