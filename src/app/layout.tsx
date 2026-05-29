import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import businessData from "../../config/business.json";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: businessData.seo.title.en,
  description: businessData.seo.description.en,
  openGraph: {
    title: businessData.seo.title.en,
    description: businessData.seo.description.en,
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        {/* LocalBusiness Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: businessData.name,
              image: "",
              "@id": "",
              url: "",
              telephone: businessData.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: businessData.address.en,
                addressLocality: "Lucknow",
                postalCode: "226021",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.9025,
                longitude: 80.9560
              },
              openingHoursSpecification: Object.entries(businessData.hours).map(([day, time]) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: day,
                opens: time.split(" - ")[0],
                closes: time.split(" - ")[1]
              }))
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black-soft dark:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
