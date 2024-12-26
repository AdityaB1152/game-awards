import {  FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const socialLinks = [
  { href: "https://www.linkedin.com/in/aditya-bonde-9311141b7/", icon: <FaLinkedin /> },
  { href: "https://github.com/AdityaB1152", icon: <FaGithub /> },
  { href: "mailto:aditya.bonde1152@gmail.com", icon: <FaMailBulk /> },
  { href: "https://adityabonde.hashnode.dev/", icon: <FaHashnode /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Website Created By Aditya Bonde
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-[#3048DC]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Not a Official IGN Website
        </a>
      </div>
    </footer>
  );
};

export default Footer;