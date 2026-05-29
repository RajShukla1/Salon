# Jankipuram Barber Shop Template

This is a production-ready, highly-converting website template for a local barber shop. Built with Next.js 15, Tailwind CSS v4, and standard static configuration files. 

## Features
- **Highly Convertible**: Built with Floating WhatsApp buttons, Click-to-call, and Quick Booking WhatsApp messages.
- **Bilingual Support**: English and Hindi out of the box.
- **Smart Status**: Automatically shows "Open Now" or "Closed Now" based on business hours configuration.
- **Config Driven**: Zero code changes required to deploy for another barber shop.
- **SEO Optimized**: Automatically generates LocalBusiness and HairSalon JSON-LD schema based on your configuration.

---

## 🛠 How to Customize

You can rebrand this entire template for any barber shop just by editing the JSON files in the `/config` directory. 

### 1. Business Details (`/config/business.json`)
Open this file to change the shop's name, address, WhatsApp number, phone number, and operating hours. 
*Note: Make sure the WhatsApp number includes the country code without any `+` sign or spaces (e.g., `919876543210`)*.

### 2. Services & Prices (`/config/services.json`)
Add or remove services and categories. The website will automatically generate the services list and connect the "Book" buttons to the configured WhatsApp number.

### 3. Offers & Promos (`/config/offers.json`)
Update this file for festival promotions (e.g. Diwali Offer, Eid Offer).

### 4. Testimonials (`/config/testimonials.json`)
Add real customer reviews and star ratings to build trust.

### 5. Languages (`/config/locales/en.json` & `hi.json`)
Change the static text of the website here. If you want to add another language, create a new locale file and update the `LanguageContext.tsx`.

---

## 🚀 Deployment Guide (Vercel)

This project is built to deploy perfectly on the **free tier of Vercel**. No database or backend required.

1. **Push to GitHub**:
   - Initialize a git repository if you haven't already (`git init`).
   - Commit your changes and push them to a public or private GitHub repository.

2. **Deploy on Vercel**:
   - Go to [Vercel.com](https://vercel.com/) and sign in with your GitHub account.
   - Click **Add New** -> **Project**.
   - Import your GitHub repository.
   - Vercel will automatically detect that it's a **Next.js** project.
   - Leave the build settings as default (`npm run build`).
   - Click **Deploy**.

3. **Custom Domain**:
   - Once deployed, your site will have a free Vercel subdomain (e.g., `jankipuram-barber.vercel.app`).
   - Go to your Vercel project **Settings** -> **Domains**.
   - Enter your custom domain (e.g., `jankipurambarbershop.com`) and follow the DNS instructions to point your domain to Vercel.

## 💻 Local Development

To run this project locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
