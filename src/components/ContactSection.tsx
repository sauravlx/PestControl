import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="text-center mb-16 animate-fadeInUp delay-300">
      <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
      <p>Head Office: 2/272, 1st Floor, Dakshin Puri Extn., Near Saket, New Delhi-110062</p>
      <p>Branch Office: Ghitorni, New Delhi-1100030</p>
      <p className="text-lg text-gray-700">Email: <a href="mailto:info@renbowpestcontrol.com" className="text-green-700 underline">info@renbowpestcontrol.com</a></p>
      <p className="text-lg text-gray-700">Phone: <a href="tel:+919015203201" className="text-green-700 underline">+91 90152 03201</a></p>
    </section>
  );
};

export default ContactSection;