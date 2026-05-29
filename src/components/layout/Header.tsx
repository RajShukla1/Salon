"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Scissors, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import businessData from "../../../config/business.json";
import { cn } from "@/lib/utils";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black-soft border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Scissors className="h-6 w-6 text-gold" />
            <span className="font-serif font-bold text-xl tracking-tight">
              {businessData.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-600 hover:border-gold hover:text-gold transition-colors"
            >
              {language === "en" ? "हिंदी" : "EN"}
            </button>
            <a
              href={`https://wa.me/${businessData.whatsapp}?text=Hello,%20I%20want%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-black-pure px-4 py-2 rounded-md font-bold text-sm transition-colors flex items-center gap-2"
            >
              {t.nav.bookNow}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-600"
            >
              {language === "en" ? "हिंदी" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black-soft border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-gold hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${businessData.whatsapp}?text=Hello,%20I%20want%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-gold hover:bg-gold-dark text-black-pure px-4 py-3 rounded-md font-bold text-base"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
