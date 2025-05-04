import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";

const Header: React.FC = () => {
  return (

    <header className="bg-green-700 text-white p-6 shadow-lg top-0 z-50 animate-fadeInDown">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Renbow Logo" width={190} height={40} className="rounded-full" />
          <h1 className="text-2xl font-extrabold tracking-wide">Renbow Pest Control</h1>
        </div>
        <nav>
          <ul className="flex gap-6 text-lg">
            <li><a href="#services" className="hover:text-yellow-300 font-bold transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 font-bold transition-colors">Contact</a></li>
            <li><a href="#about" className="hover:text-yellow-300 font-bold transition-colors">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;