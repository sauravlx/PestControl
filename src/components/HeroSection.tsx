import React from "react";
import Button from "../components/Button";

const HeroSection: React.FC = () => {
  return (

    <section className="text-center mb-16 py-20 bg-green-100 rounded-2xl shadow-inner animate-fadeInUp">

      <h2 className="text-5xl font-extrabold bold mb-4">Say Goodbye to Pests</h2>
      <p className="text-xl mb-6 text-gray-700">Safe, eco-friendly pest control for homes and businesses.</p>
      <a
  href="#quote"
  className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
>
  Get a Quote
</a>

    </section>
  );
};

export default HeroSection;