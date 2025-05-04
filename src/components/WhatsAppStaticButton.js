// components/WhatsAppStaticButton.js
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppStaticButton() {
  const phoneNumber = '919876543210'; // Replace with your number
  const message = 'Hi, I would like to know more!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full flex justify-end mt-8">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2"
      >
        <FaWhatsapp size={20} />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
