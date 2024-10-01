import React from 'react';
import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import logo from '..//assests/images/LOGOSENSPA.png';

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: FaInstagram, href: 'https://instagram.com' },
    { id: 2, icon: FaXTwitter, href: 'https://twitter.com' },
    { id: 3, icon: FaFacebookF, href: 'https://facebook.com' },
  ];

  return (
    <footer className="bg-zinc-600 dark:bg-gray-900 text-white w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-30 h-20 mr-4" />
          </div>
          <p className="text-center md:text-left mb-4 md:mb-0">
            © 2024 todos los derechos reservados
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 dark:hover:text-white transition-colors duration-300"
              >
                <link.icon size={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 