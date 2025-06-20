import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.instagram.com/_human_being_214/",
    icon: <FaInstagram size={24} className="text-pink-500" />,
  },
  {
    href: "https://github.com/your-github-username",
    icon: <FaGithub size={24} className="text-gray-300" />,
  },
  {
    href: "https://www.linkedin.com/in/yashwant-kannojiya-200016yk",
    icon: <FaLinkedin size={24} className="text-blue-600" />,
  },
  {
    href: "https://wa.me/916267791491", // replace with your number
    icon: <FaWhatsapp size={24} className="text-green-500" />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="flex justify-center gap-6 mb-3">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-[1.7]"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Yashwant Kannojiya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
