import React from 'react';
import Logo from '../assets/Logo.svg';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-10 px-5 sm:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <h2 className="uppercase font-bold text-lg">Designzcy</h2>
          </div>
          <p className="text-gray-600 text-sm">Metairie, 3689 Bassel Street, LA, Louisiana</p>
          <p className="text-gray-600 text-sm">Contact us: 225-788-5489</p>
          <div className="flex gap-3 text-[#646464] text-xl mt-2">
            <FaFacebook className="hover:text-blue-600 transition-all cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 transition-all cursor-pointer" />
            <AiFillTwitterCircle className="hover:text-sky-500 transition-all cursor-pointer" />
            <FaYoutube className="hover:text-red-500 transition-all cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700">Category</h3>
          {["Home", "About", "Services", "Reviews", "Article"].map((item, index) => (
            <p key={index} className="text-gray-600 text-sm hover:text-[#FF7A50] transition-all cursor-pointer">{item}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700">About</h3>
          {["Partners", "Careers", "Press", "Community", "Support"].map((item, index) => (
            <p key={index} className="text-gray-600 text-sm hover:text-[#FF7A50] transition-all cursor-pointer">{item}</p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-700">Subscribe to our Newsletter</h3>
          <p className="text-gray-600 text-sm">Sign up for tips, new offers, and exclusive promos.</p>
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="border p-2 rounded-lg outline-none text-sm"
          />
          <button className=" bg-gradient-to-r from-[#FF7A50] to-[#F35F2F] text-white py-2 px-6 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
            Subscribe
          </button>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm mt-8 border-t pt-4">
        <p>© {new Date().getFullYear()} Designzcy - All rights reserved.</p>
        <div className="flex gap-4">
          <p className="cursor-pointer hover:text-[#FF7A50] transition-all">Privacy</p>
          <p className="cursor-pointer hover:text-[#FF7A50] transition-all">Security</p>
          <p className="cursor-pointer hover:text-[#FF7A50] transition-all">Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
