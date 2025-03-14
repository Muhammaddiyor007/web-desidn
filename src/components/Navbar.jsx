import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io"; 
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-[1170px] mx-auto flex justify-between items-center py-4 px-6">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <h2 className="uppercase font-bold font-rubik text-lg">Designzcy</h2>
      </div>

      <div className="hidden md:flex items-center gap-16">
        <ul className="flex gap-10 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-[#F35F2F] transition">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#F35F2F] transition">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#F35F2F] transition">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#F35F2F] transition">Blog</a>
          </li>
        </ul>

        <button className="bg-[#F35F2F] text-white px-5 py-2 rounded-md hover:bg-[#d94d24] transition">
          Contact Us
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      <div className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <IoMdClose size={25} />
        </button>
        <ul className="flex flex-col gap-6 mt-16 text-lg px-6">
          <li>
            <a href="#home" className="hover:text-[#F35F2F] transition" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#F35F2F] transition" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#F35F2F] transition" onClick={() => setMenuOpen(false)}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#F35F2F] transition" onClick={() => setMenuOpen(false)}>Blog</a>
          </li>
        </ul>

        <div className="px-6 mt-6">
          <button className="w-full bg-[#F35F2F] text-white py-2 rounded-md hover:bg-[#d94d24] transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
