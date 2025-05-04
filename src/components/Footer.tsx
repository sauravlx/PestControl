import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white p-4 text-center rounded-t-2xl shadow-inner animate-fadeInUp delay-500">
      &copy; {new Date().getFullYear()} Renbow Pest Control. All rights reserved.
    </footer>
  );
};

export default Footer;