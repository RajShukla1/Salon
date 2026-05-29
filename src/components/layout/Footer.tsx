import React from "react";
import { Scissors, MapPin, Phone } from "lucide-react";
import businessData from "../../../config/business.json";

export default function Footer() {
  return (
    <footer className="bg-black-pure text-white pt-12 pb-24 md:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-gold" />
              <span className="font-serif font-bold text-xl tracking-tight">
                {businessData.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {businessData.tagline.en}
            </p>
            <div className="flex space-x-4">
              {businessData.socials.instagram && (
                <a href={businessData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              )}
              {businessData.socials.facebook && (
                <a href={businessData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-gold" />
                <span>{businessData.address.en}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
                <a href={`tel:${businessData.phone}`} className="hover:text-gold transition-colors">
                  {businessData.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {Object.entries(businessData.hours).map(([day, hours]) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
