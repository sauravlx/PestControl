import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="mb-16 animated-fadeInUp delay-100">
      <h3 className="text-4xl font-bold mb-8 text-center-800">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2 text-green-700">Anti Fungal</h4>
          <p className="text-gray-600">Effective treatment to protect your property from termite damage.</p>
        </div>


        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2 text-green-700">Cockroach & Bed Bug Control</h4>
          <p className="text-gray-600">Safe, eco-smart treatments to eliminate cockroaches and bed bugs—without harming your home.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2 text-green-700">Termite Control</h4>
          <p className="text-gray-600">Green termite control that’s tough on pests, gentle on the planet.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2 text-green-700">Rodent Control</h4>
          <p className="text-gray-600">Safe removal and prevention of rats and mice infestations.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2 text-green-700">Mosquito Fogging</h4>
          <p className="text-gray-600">Say goodbye to mozzies—our fogging keeps them gone, guaranteed!</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2 text-green-700">General Pest Control</h4>
          <p className="text-gray-600">Complete solutions for ants, cockroaches, spiders, and more.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;