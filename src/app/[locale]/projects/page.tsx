"use client";

import React, { useState } from "react";
import herobg from "../../../../public/images/home/525ab7523c86871fbf6680382ffeb83b63451acc (1).jpg";
import AxiomTowerbg from "../../../../public/images/home/Axiom Tower.png";
import HeroSection from "./components/Hero";
import ProjectTile from "./components/ProjectTile";
import Pagination from "./components/Pagination";
import ProjectCard from "./components/ProjectCard";

const ProjectsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 15;

  // Sample project data
  const projects = Array(9).fill({
    title: "Axiom Tower",
  });

  return (
    <div className=" min-h-screen bg-white pb-20">
      {/* Hero Section with Search */}
      <HeroSection backgroundImage={herobg} />

      {/* Main Title */}
      <div className="w-full container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-[clamp(20px,2.083vw,40px)]  text-center capitalize font-[700] font-['Cinzel'] max-w-5xl mx-auto px-3y">
          Explore Our Landmark Developments Shaping the Future.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="w-full container mx-auto overflow-hidden">
        <div className="flex gap-[clamp(10px,1.042vw,20px)] px-[10px] md:px-0 flex-wrap justify-center">
          {projects.map((project, index) => (
            // <ProjectTile
            //     key={index}
            //     index={index}
            //     title={project.title}
            //     backgroundImage={AxiomTowerbg}
            // />
            <ProjectCard
              key={index}
              // project={project}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProjectsPage;
