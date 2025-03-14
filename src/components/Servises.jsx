import React from 'react'
import { BsRocketFill } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

const status = [
    {
      id: 1,
      icon: <BsRocketFill size={30} color="white" />,
      bgColor: "bg-[#79E28A]",
      number: "5200+",
      text: "Projects Completed",
    },
    {
      id: 2,
      icon: <RiTeamLine size={30} color="white" />,
      bgColor: "bg-[#60DAFF]",
      number: "500+",
      text: "Active Clients",
    },
    {
      id: 3,
      icon: <VscFeedback size={30} color="white" />,
      bgColor: "bg-[#F37168]",
      number: "4500+",
      text: "Happy Clients",
    },
  ];
const Servises = () => {
  return (
   <div className="pt-16 px-4">
     <h2 className="text-[32px] sm:text-[40px] font-semibold text-center mb-10">
       We Provide the Best Web Services
     </h2>
     <div className="bg-gray-100 p-8 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center border">
       {status.map((item, index) => (
         <div
           key={item.id}
           className="flex flex-col items-center px-6 py-4 group transition duration-300"
         >
           <div
             className={`flex justify-center items-center w-[80px] h-[80px] ${item.bgColor} rounded-[15px] transition-transform duration-300 group-hover:scale-110`}
           >
             {item.icon}
           </div>
           <h3 className="text-2xl font-bold mt-4">{item.number}</h3>
           <p className="text-gray-600">{item.text}</p>
         </div>
       ))}
     </div>
   </div>
   
  )
}

export default Servises