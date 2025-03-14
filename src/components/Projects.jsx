import React from 'react'
import Bussines from '../assets/projects-image1.png'
import Food from '../assets/projects-image2.png'
import Messenger from '../assets/projects-image3.png'
import Doctors from '../assets/projects-image4.png'
import Designer from '../assets/projects-image5.png'
import Job from '../assets/projects-image6.png'

const projects = [
  { id: 1, img: Bussines, title: "Business Consultant Landing Page" },
  { id: 2, img: Food, title: "Food Delivery Web Design" },
  { id: 3, img: Messenger, title: "Messenger Landing Page" },
  { id: 4, img: Doctors, title: "Doctor’s Consultant Landing Page" },
  { id: 5, img: Designer, title: "e-Learning Web Design" },
  { id: 6, img: Job, title: "Job Finder Landing Page" },
];

const Projects = () => {
  return (
    <div className="pt-16 pb-16 px-4">
      <h2 className="text-[32px] sm:text-[40px] font-semibold text-center mb-10">
        Our Creative Latest Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="text-center">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h4 className="mt-4 text-lg font-medium text-gray-800">{project.title}</h4>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="uppercase bg-gradient-to-r from-[#FF7A50] to-[#F35F2F] text-white py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
          View all Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
