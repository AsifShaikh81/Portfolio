"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-16  scroll-mt-20" id="Home">
      
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-5 cursor-pointer">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, It's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Asif
          </span>
        </h1>
        <h2 className="text-2xl font-semibold">
          I'm a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Full Stack Developer
          </span>
        </h2>

        <p className="text-gray-400 max-w-md mx-auto md:mx-0">
          I build modern, responsive web applications that blend clean design with powerful functionality. I love turning ideas into interactive experiences that make an impact.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 text-xl pt-4">
          <a href="https://github.com/AsifShaikh81" target="_blank" className="p-2 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-black transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/asif-shaikh-a0b588315/" target="_blank" className="p-2 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-black transition"><FaLinkedin /></a>
          {/* <a href="#" target="_blank" className="p-2 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-black transition"><FaInstagram /></a> */}
          <a href="https://x.com/AsifShaikh91159" target="_blank" className="p-2 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-black transition"><FaTwitter /></a>
        </div>
      </div>
           
      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative">
          {/* Glowing Circle */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full blur-3xl opacity-70 scale-110"></div> */}
           {/* Tech Illustration */}
    <img
      src="/developer-illustration2.png" // <-- your uploaded file
      alt="developer illustration"
      className="relative w-150 h-150 object-contain drop-shadow-[0_0_40px_rgba(255,115,0,0.5)]"
    />
        </div>
      </div>

    </section>
  );
}
