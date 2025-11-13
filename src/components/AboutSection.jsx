
"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black text-white min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-20 space-y-10 md:space-y-0 md:space-x-16 scroll-mt-20"
    >
      {/* Left Side - Image or Illustration */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full blur-3xl opacity-60 scale-105"></div>
          <img
            src="/about.jpg" // replace with your image (optional)
            alt="About Me"
            className="relative rounded-full w-90 h-90 object-cover "
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Me
          </span>
        </h2>
        <p className="text-gray-400 leading-relaxed ">
         Hey, I’m Asif Shaikh — Full stack web developer who loves bringing ideas to life through clean design and smart code. I enjoy creating websites that not only look good but also feel smooth, fast, and easy to use.I work mainly with React.Js, Next.js, Tailwind CSS, Node.js and   MongoDB, and I’m always learning new things to make my projects better. I like keeping my code simple, efficient, and focused on solving real problems. change this para
        </p>
        <p className="text-gray-400 leading-relaxed">
          I enjoy working with technologies like React, Next.js, Tailwind CSS, and Node.js to build full-stack web applications that are both 
          functional and beautiful. My goal is to deliver digital experiences that leave an impact.
        </p>
      </div>
    </section>
  );
}
