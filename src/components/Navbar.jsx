"use client";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-10 py-4 bg-black text-white fixed top-0 left-0 w-full z-50
"
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-white">Asif</span>
        <span className="text-orange-500">Shaikh</span>
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li>
          <a href="#Home" className="hover:text-orange-400 cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-orange-400 cursor-pointer">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-orange-400 cursor-pointer">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-orange-400 cursor-pointer">
            Project
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-orange-400 cursor-pointer">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-400 cursor-pointer">
            Contact
          </a>
        </li>
      </ul>

      {/* Contact Button */}
      <button className="px-5 py-2 rounded-full text-white font-semibold bg-linear-to-r from-orange-500 to-yellow-500 hover:opacity-90 transition">
        <a href="/AsifShaikhCV.pdf" download="AsifShaikhCV.pdf">
          Download CV
        </a>
      </button>
    </nav>
  );
}
