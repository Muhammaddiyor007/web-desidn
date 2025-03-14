import React from 'react';
import Linda from '../assets/Linda.png';
import Smith from '../assets/Smith.png';
import Abbed from '../assets/Abbed.png';
import Fauci from '../assets/Fauci.png';
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "Amanda Linda", role: "Executive Officer", img: Linda },
  { id: 2, name: "John Smith", role: "UX/UI DESIGNER", img: Smith },
  { id: 4, name: "Dr. Fauci", role: "Web Developer", img: Fauci },
  { id: 3, name: "Abbed Khan", role: "Head of Marketer", img: Abbed },
];

const Team = () => {
  return (
    <div className="pt-16 pb-16 px-4">
      <h2 className="text-[32px] sm:text-[40px] font-semibold text-center mb-10">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="w-full sm:w-[267px] h-[400px] shadow-lg border border-gray-300 rounded-lg p-3 flex flex-col items-center 
            transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
          >
            <div className="w-full h-[270px] mb-1">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="text-center flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{member.role}</p>
              <div className="flex justify-center gap-3 text-xl">
                <div className='text-[#4D77CF] cursor-pointer hover:scale-110 transition-transform'>
                  <FaFacebook />
                </div>
                <div className='text-[#1DA1F2] cursor-pointer hover:scale-110 transition-transform'>
                  <AiFillTwitterCircle />
                </div>
                <div className='text-[#0077B5] cursor-pointer hover:scale-110 transition-transform'>
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
