import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";


const services = [
    {
      id: 1,
      icon: <HiOutlineDesktopComputer size={40} className="text-gray-700 " />,
      title: "Website Design",
      description: "Need something changed or is there something not quite working the best service",
    },
    {
      id: 2,
      icon: <FaLaptopCode size={40} className="text-gray-700" />,
      title: "Web Development",
      description: "Need something changed or is there something not quite working the best service",
    },
    {
      id: 3,
      icon: <GrAppsRounded size={40} className="text-gray-700" />,
      title: "Web Application",
      description: "Need something changed or is there something not quite working the best service",
    },
  ];
const Offering = () => {
  return (
    <div className="pt-16 pb-16 px-4">
  <h2 className="text-[32px] sm:text-[40px] font-semibold text-center mb-10">
    What Service We’re Offering
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 pt-[45px]">
    {services.map((service) => (
      <div
        key={service.id}className="relative bg-white rounded-xl p-6 text-center shadow-md transition duration-300 hover:bg-[#FFFF] group">
        <div className="absolute -top-[51px] left-1/2 transform -translate-x-1/2 w-[102px] h-[102px] flex justify-center items-center rounded-full shadow-lg transition duration-300 bg-white group-hover:bg-[#FF7A50]">
          {React.cloneElement(service.icon, { className: "text-gray-700 text-[40px] transition duration-300 group-hover:text-white" })}
        </div>
        <h4 className="text-xl font-semibold mt-16 text-gray-800">
          {service.title}
        </h4>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          {service.description}
        </p>
        <div 
          className="bg-[#F1F1F5] w-10 h-10 flex justify-center items-center rounded-full mx-auto mt-4 cursor-pointer transition duration-300 group-hover:bg-[#FF7A50]"
        >
          <FaArrowRight className="text-gray-700 transition duration-300 group-hover:text-[#FFFF]" size={18} />
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Offering