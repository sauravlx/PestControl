import React from "react";
import Header2 from "../components/Header2";
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <Head>
        <title>Pest Control Services | Safe & Effective Solutions</title>
        <meta name="description" content="Get professional pest control services for your home or office. Safe, eco-friendly and guaranteed solutions against termites, rodents, and more." />
        <meta name="keywords" content="pest control, termite treatment, rodent control, cockroach exterminator, Begusarai pest control, Bihar pest solutions" />
        <meta name="author" content="Your Pest Control Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pest Control Services | Safe & Effective Solutions" />
        <meta property="og:description" content="We offer professional and reliable pest control services tailored to your needs." />
        <meta property="og:image" content="/images/hero-bg.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="icon" href="/favicon.ico" />

            {/* jSON-LD Schema for Local Business */}

            <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Renbow Pest Control Company",
              "image": "https://yourdomain.com/images/exterminator-icon.png",
              "url": "https://renbowpestcontrol.com",
              "telephone": "+919015203201",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dakshin Puri Extn., Near Saket, New Delhi",
                "addressLocality": "Saket",
                "addressRegion": "New Delhi",
                "postalCode": "110062",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "description": "Safe and eco-friendly pest control services in Delhi NCR."
            })
          }}
        />





      </Head>
      <Header2 />
      <Header />

      <div className="relative h-screen bg-black text-white overflow-hidden">
      <Image
          src={require("/public/template.png")}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
      </div>

      <main className="container mx-auto px-4 py-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />


           { /* Get a Quote Form */}
          <section className="my-12 p-8 bg-white rounded-lg shadow-md" id="quote">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Get a Quote</h2>
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST" 
            className="max-w-2xl mx-auto space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md"
            >
              Request Quote
            </button>
          </form>
        </section>


      </main>
      <Footer />

       {/* WhatsApp Chat Button */}
       <a
        href="https://wa.me/919015203201"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.882.9 5.566 2.437 7.773L2 30l6.407-2.009A13.402 13.402 0 0016 29.5C23.456 29.5 29.5 23.456 29.5 16S23.456 2.5 16 2.5zm0 24c-2.191 0-4.228-.641-5.934-1.746l-.422-.266-3.805 1.193 1.243-3.712-.273-.437C5.59 20.068 5 18.08 5 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.122-7.308c-.336-.168-1.977-.973-2.284-1.084-.306-.113-.528-.168-.75.168s-.859 1.084-1.052 1.307c-.192.224-.384.252-.72.084-.336-.168-1.419-.522-2.703-1.667-1-1.003-1.676-2.24-1.872-2.616-.192-.385-.02-.593.145-.782.148-.165.336-.385.504-.577.168-.193.224-.336.336-.56.113-.224.056-.42-.028-.588-.084-.168-.75-1.804-1.028-2.464-.27-.648-.544-.56-.75-.57-.193-.01-.42-.01-.648-.01s-.592.084-.9.42c-.308.336-1.176 1.148-1.176 2.801s1.204 3.244 1.372 3.472c.168.224 2.368 3.616 5.744 5.073 3.376 1.457 3.376.972 3.984.91.609-.057 1.977-.808 2.256-1.588.28-.78.28-1.45.196-1.588-.084-.14-.308-.224-.644-.392z" />
        </svg>
      </a>

    </div>
  );
}